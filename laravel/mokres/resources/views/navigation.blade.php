<x-navigation-layout>
      <x-navigationSlot name="subjectNavigation">

            Biski teksto
            @foreach ( $subjects as $subject)
                <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <x-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
                      {{ $subject }}
                </x-nav-link>
                </div>
            @endforeach
            </x-navigationSlot>