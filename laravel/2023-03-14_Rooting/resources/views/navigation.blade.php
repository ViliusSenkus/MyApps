<nav>
      <ul class="list-group flex-row justify-content-center">
            @foreach($navigationLinks as $navLink)
            <a href="/{{$navLink}}" class="text-decoration-none list-group-item-action">
                  <li  class="list-group-item bg-info-subtle m-1 rounded-3">{{ $navLink }}</li>
            </a>
            @endforeach
      </ul>
</nav>