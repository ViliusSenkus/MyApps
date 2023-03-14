
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="{{URL::asset('resources/css/app.css')}}"}} rel="stylesheet" type="text/css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <link href="resources/css/app.css" rel="stylesheet" type="text/css">
      <title>2023-03-14 Rooting training</title>
</head>
<body>
      <header class="text-center mt-1">
            <h1>Creating page navigation in Laravel</h1>
            <nav>
                <ul class="list-group flex-row justify-content-center">
                    <a href="/Home" class="text-decoration-none list-group-item-action">
                        <li class="list-group-item bg-info-subtle m-1 rounded-3">Home</li>
                    </a>
                                <a href="/Services" class="text-decoration-none list-group-item-action">
                        <li class="list-group-item bg-info-subtle m-1 rounded-3">Services</li>
                    </a>
                                <a href="/Why us" class="text-decoration-none list-group-item-action">
                        <li class="list-group-item bg-info-subtle m-1 rounded-3">Why us</li>
                    </a>
                                <a href="/Our Works" class="text-decoration-none list-group-item-action">
                        <li class="list-group-item bg-info-subtle m-1 rounded-3">Our Works</li>
                    </a>
                                <a href="/We are noticed" class="text-decoration-none list-group-item-action">
                        <li class="list-group-item bg-info-subtle m-1 rounded-3">We are noticed</li>
                    </a>
                                <a href="/Recomendations" class="text-decoration-none list-group-item-action">
                        <li class="list-group-item bg-info-subtle m-1 rounded-3">Recomendations</li>
                    </a>
                                <a href="/Prices" class="text-decoration-none list-group-item-action">
                        <li class="list-group-item bg-info-subtle m-1 rounded-3">Prices</li>
                    </a>
                                <a href="/Contacts" class="text-decoration-none list-group-item-action">
                        <li class="list-group-item bg-info-subtle m-1 rounded-3">Contacts</li>
                    </a>
                </ul>
            </nav>
      </header>
<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Check If The Application Is Under Maintenance
|--------------------------------------------------------------------------
|
| If the application is in maintenance / demo mode via the "down" command
| we will load this file so that any pre-rendered content can be shown
| instead of starting the framework, which could cause an exception.
|
*/

if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| this application. We just need to utilize it! We'll simply require it
| into the script here so we don't need to manually load our classes.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request using
| the application's HTTP kernel. Then, we will send the response back
| to this client's browser, allowing them to enjoy our application.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);
?>
