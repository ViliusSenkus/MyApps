@extends('layouts.main')

@section('main')

<h2>Choose your product</h2>

<div style="display:flex; flex-direction:row; justify-content:space-between">
      <?php
      $x=1;
      ?>
      @foreach ($prices as $price)
            <div>
                  <h3>Product {{$x}}</h3>
                  <?php
                  $x++;
                  ?>
                  <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur explicabo, tempore officiis vero illum autem iusto in ducimus delectus quis repellat recusandae, quisquam facere beatae neque ipsa necessitatibus suscipit.
                  </div>
                  <div>Just {{$price}}</div>
            </div>
      @endforeach
</div>

@stop