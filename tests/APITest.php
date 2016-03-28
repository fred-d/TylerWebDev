<?php

use TylerWebDev\MeetupAPI;

class APITest extends PHPUnit_Framework_TestCase
{
    public function testCanInstantiate()
    {
        $MeetupAPI = new MeetupAPI('7aa105c7f686c2b15667f1136125c3c', 'Tyler-Web-Dev');

        $this->assertInstanceOf(TylerWebDev\MeetupAPI::class, $MeetupAPI);
    }

    public function testCanGetMembers()
    {
        $MeetupAPI = new MeetupAPI('7aa105c7f686c2b15667f1136125c3c', 'Tyler-Web-Dev');

        $this->assertNotEmpty($MeetupAPI->getMembers());
    }

    public function testCanGetNonPagedOver25Members()
    {
        $MeetupAPI = new MeetupAPI('7aa105c7f686c2b15667f1136125c3c', 'Tyler-Web-Dev');

        $this->assertGreaterThan(25, $MeetupAPI->getMembers()['results']);
    }
}