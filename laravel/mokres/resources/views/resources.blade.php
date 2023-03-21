<div>
      
      @if (isset($subjects))
            @foreach ( $subjects as $subject)
                  <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        
                              {{ $subject->subject_name }}
                        
                  </div>
            @endforeach
      @endif
      
</div>