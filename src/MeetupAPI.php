<?php

namespace TylerWebDev;

use GuzzleHttp\Client;

/**
 * Class MeetupAPI
 * @package Meetup
 */
class MeetupAPI {

    /**
     * @var Client
     */
    private $client;

    /**
     * MeetupAPI constructor.
     */
    public function __construct($key, $group_urlname)
    {
        $this->client = new Client([
            'base_uri' => 'https://api.meetup.com/2',
            'query' => [
                'key' => $key,
                'group_urlname' => $group_urlname,
                'page' => 500,
                'sign' => true
            ]
        ]);
    }

    public function getMembers()
    {
        return json_decode($this->client->get('members')->getBody(), true);
    }
}