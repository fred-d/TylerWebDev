<?php

use Carbon\Carbon;
use Illuminate\Validation\Validator;
use TylerWebDev\MeetupAPI;
use TylerWebDev\RedisCache;
use Slim\Container;
use Slim\Http\Request;
use Slim\Http\Response;
use TylerWebDev\TylerWebDev;

require __DIR__ . '/../bootstrap.php';

$app = new \Slim\App(\TylerWebDev\TylerWebDev::$container);

$app->get('/', function (Request $request, Response $response, $args) {
    return $this->renderer->render($response, "/home.php", $args);
});

$app->post('/', function (Request $req, Response $res, $args) {
    /** @var Validator $Validator */
    $Validator = TylerWebDev::validator(
        $req->getParams(),
        [
            'name' => 'required|max:100',
            'email' => 'required|email',
            'phone' => 'required|digits:10',
            'cause' => 'required|max:500'
        ], [
            'name.required' => "We need to know your organization's name!",
            'name.max' => "Your organization's name seems a little long! Try to keep it to :max letters!",
            'email.required' => 'We need to know your email address!',
            'email.email' => 'The provided email is not valid!',
            'phone.required' => 'We need your phone number!',
            'phone.digits' => 'Your phone number should be :digits numbers!',
            'cause.required' => 'We need to know about your cause!',
            'cause.max' => 'Please keep your cause description limited to :max characters!',
        ]
    );

    if ($Validator->passes()) {
        \TylerWebDev\Database\Models\NonProfitRequest::create([
            'request' => json_encode($req->getParams())
        ]);

        return $res;
    }

    /**
     * Show errors
     */
    return $res->withJson($Validator->errors()->getMessages(), 400);
});

/**
 * Cached (refreshes upon first request every 24 hours) MeetUp api members
 */
$app->get('/members', function (Request $request, Response $response, $args) {
    $now = Carbon::now();

    /** @var Container $container */
    $container = $this;

    /** @var RedisCache $Cache */
    $Cache = $container->get('Cache');

    $Cache->set('members', function() use ($container) {
        /** @var MeetupAPI $MeetupAPI */
        $MeetupAPI = $container->get('MeetupAPI');

        $members = $MeetupAPI->getMembers();

        return json_encode($members);
    });

    $body = $response->getBody();

    $body->write($Cache->get('members', $now));

    return $response->withHeader(
        'Content-Type',
        'application/json'
    );
});

$app->run();
