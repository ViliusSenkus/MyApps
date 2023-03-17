<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="preconnect" href="https://fonts.bunny.net">
      <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
      <title>Mokorgas</title>
</head>
<body>
      <header>
            <div>
                  <h1>Mokorgas - mokymosi organaizeris</h1>
            </div>

{{-- žemiau einantis kodas turi kartotis pagal turimų subjektų skaičių --}}
            
            <nav style="display:flex; flex-direction:row; justify-content:space-between;">
                  <a href="/">
                        <li>
                        Pagrindinis
                        </li>
                  </a>
                  {{-- linkas turi būti paimamas iš paduodamų kintamųjų reikšmių (subject) --}}
                  <a href="/new-entry">
                        <li>
                        Subjektas
                        </li>
                  </a>
                  <a href="/about">
                        <li>
                        Apie
                        </li>
                  </a>
                  <div>
                        <form method="POST">
                              <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                              <input type="text" name="search" />
                              <button type="submit">
                                    <span>Ieškoti</span>  {{--pajungus stilius reikės pakeisti į paieškos ikonėlę--}}
                              </button>
                        </form>
                  </div>
            </nav>
            
            

      </header>

      <sidebar>

      </sidebar>

      <main>
            
            @yield('calendar')
            @yield('main-block')
            @yield('input-block')

      </main>
      
      <footer>

      </footer>
</body>
</html>