<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Pagrindinis puslapis') }}
        </h2>

        @yield('subject-navigation')
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    {{ __("Jūs prisijungėte!") }}
                </div>
            </div>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">

                    {{-- Iš formos tago išimtas toks atributas - action="{{ route('profile.update') }}"     --}}
                    <form method="post" class="mt-6 space-y-6">
                            @csrf
                            @method('patch')
                        {{-- <input type="hidden" name="_token" value="{{ csrf_token() }}" /> --}}
                        <div>
                            <x-input-label for="subject" :value="__('Pridėti mokymo dalyką')" />
                            <x-text-input id="subject" name="subject_name" type="text" class="mt-1 block w-full"  required autofocus />
                            <x-input-error class="mt-2" :messages="$errors->get('name')" />
                        </div>
                        
                        <div class="flex items-center gap-4">
                            <x-primary-button>{{ __('Pridėti') }}</x-primary-button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
