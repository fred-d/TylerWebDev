<?php

class RedisCacheTest extends PHPUnit_Framework_TestCase
{
    /**
     * Used to reset redis keys used in test
     */
    protected function setUp()
    {
        $Predis = new Predis\Client();

        $Predis->del([
            'test',
            'test_last_requested'
        ]);
    }

    public function testCanInstantiate()
    {
        $Cache = new TylerWebDev\RedisCache(new \Predis\Client());

        $this->assertInstanceOf(\TylerWebDev\RedisCache::class, $Cache);
    }

    public function testRunsClosureOnFirstAccess()
    {
        $Cache = new TylerWebDev\RedisCache(new \Predis\Client());

        try {
            $Cache->set('test', function(){
                throw new \Exception('closure executed');
            });
        } catch (\Exception $e) {
            $this->assertEquals('closure executed', $e->getMessage());
        }
    }

    public function testRunsClosureOnAlreadySetButExpiredValue()
    {
        $Cache = new TylerWebDev\RedisCache(new \Predis\Client());

        $now = \Carbon\Carbon::now();

        /**
         * We need to ensure it is already set, and the last request time
         */
        $Predis = new \Predis\Client();
        $Predis->set('test', 'test');
        $Predis->set('test_last_requested', (string) $now);


        $Cache->set('test', function(){
            throw new \Exception('closure executed');
        }, 24, $now);

        try {
            /**
             * Add 24 hours to trigger refresh
             */
            $Cache->get('test', $now->copy()->addHours(24));
        } catch (\Exception $e) {
            $this->assertEquals('closure executed', $e->getMessage());
        }
    }

    public function testDoesNotRunClosureOnAlreadySetButNotExpiredValue()
    {
        $Cache = new TylerWebDev\RedisCache(new \Predis\Client());

        $now = \Carbon\Carbon::now();

        /**
         * We need to ensure it is already set, and the last request time
         */
        $Predis = new \Predis\Client();
        $Predis->set('test', 'test');
        $Predis->set('test_last_requested', (string) $now);

        $Cache->set('test', function(){
            throw new \Exception('closure executed');
        }, 24, $now);

        /**
         * Add 23 hours, 1 less than needed to refresh, should not execute closure
         */
        $Cache->get('test', $now->copy()->addHours(23));
    }

    /**
     * @expectedException \Exception
     */
    public function testThrowsExceptionOnGetBeforeSet()
    {
        $Cache = new TylerWebDev\RedisCache(new \Predis\Client());

        $Cache->get('test');
    }

    /**
     * @expectedException \Exception
     */
    public function testThrowsExceptionOnMultiplsSetCalls()
    {
        $Cache = new TylerWebDev\RedisCache(new \Predis\Client());

        $setter = function(){
            return 'test';
        };

        $Cache->set('test', $setter);
        $Cache->set('test', $setter);
    }
}