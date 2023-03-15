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
      <sidbar>
            @yield ('sidebar')
      </sidbar>
      <main>
            @yield ('main')
      </main>
      <footer>
            @yield ('footer')
      </footer>

</body>