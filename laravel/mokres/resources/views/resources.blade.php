<div>
      cia turi b8ti visi resursai, bet kol kas bus s1ra6as dalyku
     
     {{-- @dump($allSubjects) --}}
     {{$kazkas}}
      @if (isset($allSubjects))
            @foreach ( $allSubjects as $subject)
                  <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        
                              {{ $subject }}
                        
                  </div>
            @endforeach
      @endif
      
</div>