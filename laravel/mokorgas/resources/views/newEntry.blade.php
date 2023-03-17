@extends ('layouts/main')

@section('main-block')
<div>
      <h4>Pasirinkite ką norite pridėti</h4>
      <nav>
            <a href="/new-subject">
                  <li>Naujas mokymo dalykas</li>
            </a>
            <a href="/new-topic">
                  <li>Naujas mokymo klausimas</li>
            </a>
            <a href="/new-note">
                  <li>Nauja pastaba</li>
            </a>
            <a href="/new-link">
                  <li>Nauja nuoroda</li>
            </a>
            <a href="/new-file">
                  <li>Naujas failas</li>
            </a>
</div>
@stop

@yield('child')