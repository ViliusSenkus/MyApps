@extends("layouts.child")

@section("child")
<div>
      <form method="POST">
            <input type="hidden" name="_token" value="{{ csrf_token() }}" />
            <label>Mokomojo dalyko pavadinimas</label>
            <input type="text" name="subject_name" />
            <button type="submit">Sukurti</button>
</div>
@stop