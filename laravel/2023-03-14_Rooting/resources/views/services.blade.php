@extends('layouts.main')

@section('main')

<div>
      @foreach($services as $serv)
      <h2>{{$serv}}</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam iusto quasi quam delectus, repellat dolores hic corporis sapiente. Aperiam, mollitia aut illum quos laboriosam, quod in sed, nulla at rem repudiandae! Excepturi provident ab impedit earum nesciunt explicabo officiis odio pariatur culpa omnis, ea libero incidunt? Necessitatibus, quis labore!
      @endforeach
</div>

@stop