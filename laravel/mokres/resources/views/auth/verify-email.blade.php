<x-guest-layout>
    <div class="mb-4 text-sm text-gray-600">
        {{ __('Ačiū, kad registruojatės! Patvirtinkite registraciją, paspausdami ant nuorodos, kurią išsiuntėme jūsų nurodytu pašto adresu. Jeigu negavote mūsų laiško, patikrinkite nepageidaujamo pašto dėžutę. Taip pat galime išsiųsti jums kitą registracijos patvirtinimo laišką.') }}
    </div>

    @if (session('status') == 'verification-link-sent')
        <div class="mb-4 font-medium text-sm text-green-600">
            {{ __('Naujas patvirtinimo laiškas išsiųstas jūsų registracijos metu nurodytu pašto adresu.') }}
        </div>
    @endif

    <div class="mt-4 flex items-center justify-between">
        <form method="POST" action="{{ route('verification.send') }}">
            @csrf

            <div>
                <x-primary-button>
                    {{ __('Pakartotinai siųsti patvirtinimo laišką') }}
                </x-primary-button>
            </div>
        </form>

        <form method="POST" action="{{ route('logout') }}">
            @csrf

            <button type="submit" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {{ __('Atsijungti') }}
            </button>
        </form>
    </div>
</x-guest-layout>
