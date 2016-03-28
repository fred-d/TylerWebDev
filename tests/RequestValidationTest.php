<?php

class RequestValidationTest extends PHPUnit_Framework_TestCase
{
    /** @var  \GuzzleHttp\Client $client */
    protected $client;

    protected function setUp()
    {
        $this->client = new \GuzzleHttp\Client([
            'base_uri' => 'http://localhost:3000'
        ]);
    }

    public function testGets200OnGoodRequest()
    {
        $this->assertEquals(200, $this->client->post('/', [
            'json' => [
                'name' => 'Prestige Realty',
                'email' => 'logan@loganhenson.com',
                'phone' => '9033606313',
                'cause' => 'I think prestige realty deserves a free site because they are providing a great meetup location free of charge! But they are not a non-profit...'
            ]
        ])->getStatusCode());
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnNoName()
    {
        try {
            $this->client->post('/', [
                'json' => ['foo' => 'bar']
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('name', $response);
            $this->assertContains(
                "We need to know your organization's name!",
                $response['name']
            );
            throw $e;
        }
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnNameTooLong()
    {
        try {
            $this->client->post('/', [
                'json' => ['name' => str_repeat('a', 101)]
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('name', $response);
            $this->assertContains(
                "Your organization's name seems a little long! Try to keep it to 100 letters!",
                $response['name']
            );
            throw $e;
        }
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnMissingEmail()
    {
        try {
            $this->client->post('/', [
                'json' => []
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('email', $response);
            $this->assertContains(
                'We need to know your email address!',
                $response['email']
            );
            throw $e;
        }
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnInvalidEmail()
    {
        try {
            $this->client->post('/', [
                'json' => ['email' => 'invalid email']
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('email', $response);
            $this->assertContains(
                'The provided email is not valid!',
                $response['email']
            );
            throw $e;
        }
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnMissingPhoneNumber()
    {
        try {
            $this->client->post('/', [
                'json' => []
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('phone', $response);
            $this->assertContains(
                'We need your phone number!',
                $response['phone']
            );
            throw $e;
        }
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnPhoneNumberNotDigits()
    {
        try {
            $this->client->post('/', [
                'json' => ['phone' => 'thisischar']
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('phone', $response);
            $this->assertContains(
                'Your phone number should be 10 numbers!',
                $response['phone']
            );
            throw $e;
        }
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnPhoneNumberTooFewDigits()
    {
        try {
            $this->client->post('/', [
                'json' => ['phone' => '903360']
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('phone', $response);
            $this->assertContains(
                'Your phone number should be 10 numbers!',
                $response['phone']
            );
            throw $e;
        }
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnPhoneNumberTooManyDigits()
    {
        try {
            $this->client->post('/', [
                'json' => ['phone' => '19033606313']
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('phone', $response);
            $this->assertContains(
                'Your phone number should be 10 numbers!',
                $response['phone']
            );
            throw $e;
        }
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnMissingCause()
    {
        try {
            $this->client->post('/', [
                'json' => []
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('cause', $response);
            $this->assertContains(
                'We need to know about your cause!',
                $response['cause']
            );
            throw $e;
        }
    }

    /**
     * @expectedException \GuzzleHttp\Exception\ClientException
     */
    public function testGetsNiceErrorOnTooLongCause()
    {
        try {
            $this->client->post('/', [
                'json' => ['cause' => str_repeat('a', 501)]
            ]);
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = json_decode($e->getResponse()->getBody(), true);
            $this->assertArrayHasKey('cause', $response);
            $this->assertContains(
                'Please keep your cause description limited to 500 characters!',
                $response['cause']
            );
            throw $e;
        }
    }
}