<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Pagrindinis puslapis') }}
            
        </h2>

        @yield('subject-navigation')

    </x-slot>

    <x-slot name="navigacija">
        @foreach ( $subjects as $subject)
            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
            <x-nav-link :href="$subject->subject_name" :active="request()->routeIs('subject')">
                {{ $subject->subject_name }}
            </x-nav-link>
            </div>
        @endforeach
    </x-slot>

    {{-- <div class="py-6">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    {{ __("Jūs prisijungėte!") }}
                </div>
            </div>
        </div>
    </div> --}}

    <div class="py-6">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <form method="POST" class="mt-6 space-y-6">
                            @csrf
                        <div>
                            <x-input-label for="subject" :value="__('Pridėti mokymo dalyką')" />
                            <x-text-input id="subject" name="subject_name" type="text" class="mt-1 block w-full"  required autofocus />
                            <x-input-error class="mt-2" :messages="$errors->get('name')" />
                        </div>
                        
                        <div class="flex items-center gap-4">
                            <x-primary-button>{{ __('Pridėti') }}</x-primary-button>
                            @if(isset($alert))
                                <h4 class="font-semibold text-xl text-pink-800 leading-tight">
                                    {{$alert['alert']}}
                                </h4>
                                <span>{{$alert['note']}}</span>
                            @endif
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="py-6">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    Čia kažką reikia pridėti, gal paskutinius įrašus?
                    Kai sugalvosiu pildyti dashboard.blade.php failą.
                </div>
            </div>
        </div>
    </div>




</x-app-layout>
