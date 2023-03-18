<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;

class SubjectController extends Controller
{
    // reikia gauti iš rooterio nuorodą po subjekto sukurimo į pridėjimo funkciją ir po paršalinimo į ištrynimo funkciją

    public function store(Request $request)
    {
        // algoritmas:
        // - tikriname gautos reikšmės teisingumą
        // - jeigu gerai tęsiame, jeigu ne - pranešimas, kad subjekto pavadinimas negeras ir exit;
        // - pakeičiame pirmą/as raidę/es į didžiąją/sias
        // - tikriname ar jau yra toks dalykas
        // - jeigu yra - tikriname kuriam vartotojui priskirtas (jeigu bus daromi vartotojai)
        // - jeigu priskirtas jau esamam vartotojui - pranešimas, kad toks subjektas jau egzistuoja (galimas nukreipimas į subjekto vaizdą).
        // - jeigu vartptojui subjektas nepriskirtas arba subjekto nėra - sukuriame subjektą ir priskiriame jį vartotojui.
        // - gražinam atvaizdavimą - "Subjektas" sukurtas pridėkite mokymosi medžiagos ir į reikiamas vietas paduodama informacija su visų vartotojo subejketų masyvu.
        if (! Auth::guard('web')->validate([
            'email' => $request->user()->email,
            'password' => $request->password,
        ])) {
            throw ValidationException::withMessages([
                'password' => __('auth.password'),
            ]);
        }

        $request->session()->put('auth.password_confirmed_at', time());

        return redirect()->intended(RouteServiceProvider::HOME);
    }


}
