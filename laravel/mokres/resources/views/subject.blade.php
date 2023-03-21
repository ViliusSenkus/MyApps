@extends ('dashboard')

@section('subject')
<div>
      Dumpinimas yra subject.blade.faile ir jis yra iYieldinamas i dashboardą pagal Route:get('/{id}'), kur id - subjekto pavadinimas
      @dump($id)
      <br/>
      @dump($subjects)
</div>

@stop