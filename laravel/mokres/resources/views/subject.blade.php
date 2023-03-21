@extends ('dashboard')

@section('subject')
<div>
      Dumpinimas yra subject.blade.faile ir jis yra iYieldinamas i dashboardą pagal Route:get('/{id}'), kur id - subjekto pavadinimas
      @dump($id)
      <br/>
      @dump($subjects)
      <br />
      @dump(auth()->user()->id)
      @dump(auth()->user()->name)
      @dump(auth()->user()->email)


      Patekome į {{$id}} subjektą - {{$subjects[$id-1]->subject_name}}

      <div class="flex flex-wrap justify-center">

            <div id="Notes" class="py-4 sm:px-6 lg:px-8 bg-white shadow-sm sm:rounded-lg m-3 w-2/5">
                  
                  <h3 class="text-xl font-semibold mb4">Pagrindinė veikla</h3>

                  <div>
                        <h5 class="mt-2 underline">To do:</h5>
                  </div>
                  <div>
                  {{-- neįmanoma pildyti formos, kol nėra aikšus route ir kintamųjų padavimas --}}
                        <form method="POST">
                              @csrf
                              <div>
                                    <x-text-input name="note" type="text" class="inline-block w-3/5 text-xs"  required/>
                                    <x-primary-button class="inline-block w-1/5">{{ __('Pridėti') }}</x-primary-button>
                                    <x-input-error class="mt-2" :messages="$errors->get('name')" />
                  {{-- aukštesnėje eilutėje reikia keisti get('name') parametrą? --}}
                                    <x-text-input name="note_type" type="text" value="to do" hidden />
                              </div>
                        </form>

                        @if (isset($subjects))
                              @foreach ( $subjects as $subject)
                                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                          <x-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
                                                {{ $subject->subject_name }}
                                          </x-nav-link>
                                    </div>
                              @endforeach
                        @endif
                  </div>
                  
                  <div>
                        <h5 class="mt-2 underline">To learn:</h5>
                  </div>
                  <div>
                  </div>
                  
                  <div>
                        <h5 class="mt-2 underline">To remember/improve:</h5>
                  </div>
                  <div>
                  </div>
            </div>
      
            <div id="links" class="py-4 sm:px-6 lg:px-8 bg-white shadow-sm sm:rounded-lg m-3 w-2/5">

                  <h3 class="text-xl font-semibold mb-4">Nuorodos</h3>

                  <div>
                        <h5 class="mt-2 underline">Video pamokos</h5>
                  </div>
                  <div>
                  </div>

                  <div>
                        <h5 class="mt-2 underline">Online kursai</h5>
                  </div>
                  <div>
                  </div>

                  <div>
                        <h5 class="mt-2 underline">Nuorodos į dokumentaciją</h5>
                  </div>
                  <div>
                  </div>

                  <div>
                        <h5 class="mt-2 underline">kitos nuorodos</h5>
                  </div>
                  <div>
                  </div>
            </div>
      
            <div id="files" class="py-4 sm:px-6 lg:px-8 bg-white shadow-sm sm:rounded-lg m-3 w-2/5">

                  <h3 class="text-xl font-semibold mb-4">Failai</h3>

                  <div>
                        <h5 class="mt-2 underline">Veiklos flow-chat'ai</h5>
                  </div>
                  <div>
                  </div>

                  <div>
                        <h5 class="mt-2 underline">kiti</h5>
                  </div>
                  <div>
                  </div>
            </div>
      
            <div id="other" class="py-4 sm:px-6 lg:px-8 bg-white shadow-sm sm:rounded-lg m-3 w-2/5">

                  <h3 class="text-xl font-semibold mb-4">Kita</h3>

                  <div>
                        <h5 class="mt-2 underline">Sintaksės ypatybės</h5>
                  </div>
                  <div>
                  </div>

                  <div>
                        <h5 class="mt-2 underline">Apėjimai/triukai</h5>
                  </div>
                  <div>
                  </div>

                  <div>
                        <h5 class="mt-2 underline">Kita</h5>
                  </div>
                  <div>
                  </div>
            </div>
      
      </div>
</div>

@stop