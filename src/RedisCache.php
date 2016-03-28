<?php

namespace TylerWebDev;

use Carbon\Carbon;
use Predis\Client;

class RedisCache
{
    private $closureMap = [];
    private $expireMap = [];
    private $now;

    public function __construct(Client $Predis, Carbon $now = null)
    {
        $this->Predis = $Predis;
        $this->now = $now ?: Carbon::now();
    }

    public function set($key, callable $function, $hours = 24, Carbon $now = null)
    {
        $this->expireMap[$key] = $hours;

        if($this->isExpired($key, $now ?: $this->now)){
            $this->Predis->set($key, (string) $function());
        }

        if(isset($this->closureMap[$key])){
            throw new \Exception("$key has already been set, you must be accidentally overwriting a previously set value");
        }

        $this->closureMap[$key] = $function;
    }

    private function isExpired($key, Carbon $now = null)
    {
        if(!isset($this->expireMap[$key])){
            throw new \Exception('You are attempting to access a value that has not been set previously');
        }

        $key_last_requested = $this->Predis->get("{$key}_last_requested");

        return is_null($key_last_requested) ?: (new Carbon($key_last_requested))->diffInHours($now ?: $this->now) >= $this->expireMap[$key];
    }

    public function get($key, Carbon $now = null)
    {
        if($this->isExpired($key, $now ?: $this->now)) {
            $this->Predis->set("{$key}_last_requested", (string) ($now ?: $this->now));

            return $this->Predis->get($key);
        }

        return $this->Predis->get($key);
    }
}