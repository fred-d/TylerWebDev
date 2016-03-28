<?php

namespace TylerWebDev;

use Illuminate\Validation\Validator;
use Predis\Client;
use Slim\Container;
use Slim\Views\PhpRenderer;
use Symfony\Component\Translation\Translator;
use Illuminate\Database\Capsule\Manager;

class TylerWebDev
{
    /**
     * @var \Pimple\Container $container
     */
    public static $container;

    private static function init(array $server_settings)
    {
        if (!isset(self::$container)) {
            session_start();

            $container = new Container([
                'settings' => [
                    'displayErrorDetails' => PHP_OS === 'darwin',
                ]
            ]);

            /**
             * Define all services here
             */

            /**
             * Eloquent bootstrapping / access for validation,
             * Simple ActiveRecord style database access
             * @return Manager
             */
            $container['eloquent'] = function () use ($server_settings) {
                $capsule = new Manager();

                $capsule->addConnection([
                    'driver'    => 'pgsql',
                    'host'      => $server_settings['dbhost'],
                    'database'  => $server_settings['dbname'],
                    'username'  => $server_settings['dbuser'],
                    'password'  => $server_settings['dbpassword'],
                    'charset'   => 'utf8',
                    'collation' => 'utf8_unicode_ci',
                    'prefix'    => '',
                ]);

                // Make this Capsule instance available globally via static methods... (optional)
                $capsule->setAsGlobal();

                // Setup the Eloquent ORM... (optional; unless you've used setEventDispatcher())
                $capsule->bootEloquent();

                return $capsule;
            };
            /**
             * Need to go ahead and register eloquent to bootstrap it.
             */
            $container['eloquent'];

            $container['MeetupAPI'] = function (Container $container) {
                return new MeetupAPI('7aa105c7f686c2b15667f1136125c3c', 'Tyler-Web-Dev');
            };

            $container['Predis'] = function (Container $container) {
                return new Client();
            };

            $container['Cache'] = function (Container $container) {
                return new RedisCache($container->get('Predis'));
            };

            /**
             * Render Views
             */
            $container['renderer'] = function () {
                return new PhpRenderer(__DIR__ . '/../views');
            };

            /** Assign static container */
            self::$container = $container;
        }
    }

    public static function initialize()
    {
        $server_settings = parse_ini_file(
            __DIR__ . '/../env.ini'
        );

        foreach ($server_settings as $key => $val) {
            if (!defined($key)) {
                define($key, $val);
            }
        }

        /**
         * Disable Opcache for development
         */
        if (PHP_OS === 'darwin') {
            ini_set('opcache.enable', '0');
        }

        self::init($server_settings);
    }

    public static function make($service, $raw = false)
    {
        if (!isset(self::$container)) {
            self::initialize();
        }

        return $raw ? self::$container->raw($service) : self::$container[$service];
    }

    /**
     * @param $input
     * @param $rules
     * @param array $messages
     * @param array $customAttributes
     * @return Validator
     */
    public static function validator(
        $input,
        $rules,
        $messages = [],
        $customAttributes = []
    ) {
        return new Validator(
            new Translator(null),
            $input,
            $rules,
            $messages,
            $customAttributes
        );
    }
}
