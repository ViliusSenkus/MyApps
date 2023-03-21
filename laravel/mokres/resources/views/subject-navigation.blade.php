@extends('dashboard')

@section('subject-navigation')

      @if (isset($subjects))
            @foreach ( $subjects as $subject)
                  <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <x-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
                              {{ $subject->subject_name }}
                        </x-nav-link>
                  </div>
            @endforeach
      @endif

@stop