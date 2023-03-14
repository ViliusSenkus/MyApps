<a href="/">Home</a>
<h2>Contact us</h2>

<div>
      
      @foreach ($contacts as $key=>$contact)
            <div>
                 {{$key}} _____ {{$contact}}
            </div>
      @endforeach
</div>