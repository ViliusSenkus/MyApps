@extends('layouts.main')

@section('main')

<h2>We was Noticed</h2>

<div style="display:flex; flex-direction:row; justify-content:space-between">
      
      @foreach ($notes as $note)
            <div>
                  <h3>{{$note}}</h3>
                  <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur explicabo, tempore officiis vero illum autem iusto in ducimus delectus quis repellat recusandae, quisquam facere beatae neque ipsa necessitatibus suscipit.
                  </div>
            </div>
      @endforeach
</div>

@stop
