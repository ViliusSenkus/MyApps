<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;

class SubjectController extends Controller
{

    // reikia gauti iš rooterio nuorodą po subjekto sukurimo į pridėjimo funkciją ir po paršalinimo į ištrynimo funkciją

    public function addSubject(Request $request)
    {
        /*
        |--------------------------|
        | A L G O R I T M A S :    |
        |--------------------------|-------------------------------------------------------------------------
        | 1. tikriname gautos reikšmės teisingumą.
        |   - jeigu gerai tęsiame, jeigu ne - pranešimas, kad subjekto pavadinimas negeras ir exit.
        | 2. pakeičiame pirmą/as raidę/es į didžiąją/sias ir panaikinam papaildomus tarpus.
        | 3. tikriname ar Duomenų bazėje jau yra toks subjektas.
        |   - jeigu yra - tikriname kuriam vartotojui priskirtas.
        |   - jeigu priskirtas jau esamam vartotojui - pranešimas, kad toks subjektas jau egzistuoja
        |    (galimas  nukreipimas į subjekto vaizdą).
        | 4. jeigu vartotojui subjektas nepriskirtas arba subjekto nėra - kuriame subjektą ir priskiriame jį vartotojui.
        | 5. gražinam atvaizdavimą - "Subjektas" sukurtas pridėkite mokymosi medžiagos ir į reikiamas vietas paduodama informacija su visų vartotojo subejketų masyvu.
        |----------------------------------------------------------------------------------------------------
        */

        $newEntry = $request->subject_name;

        // -1.-
        if (strlen($newEntry)<2 || strlen($newEntry)>30){
            $alert = array(
                "alert" => "Netinkamo ilgio pavadinimas",
                "note" => "Pavadinimas turi būti nuo 3 iki 29 simbolių"
            );
            return view ('dashboard', ["alert" => $alert]);
        }
        // pagal poreikį reikia pridėti kitus patikrinimus.
            
        // -2.-
        $newEntry = strtolower($newEntry);
        $newEntry = ucfirst($newEntry);
        $newEntry = preg_replace('/\s+/', ' ', $newEntry);

        //  -3.-
        // pridėjus į subjektų lentelę vartotojus, reikės atsirinkti turimus vartotojo subjektus ir tikrinti tik su jo jau turimais.
        $newSubject=new Subject;
        $allSubjects = Subject::all();

        foreach($allSubjects as $all){
            if ($all->subject_name == $newEntry){   
                $alert = array(
                    "alert" => "Toks mokomasis dalykas jau egzistuoja",
                    "note" => "Jeigu norite pridėti medžiagos eikite į Mokomojo dalyko laukelį"
                );
                return view ('dashboard', ["alert" => $alert]);
            }
        }

        //  -4.-
        $newSubject->subject_name=$newEntry;
        $newSubject->save();
        
        // -5.-
        return view ('dashboard', ["subjects"=>$allSubjects]);
    }


    public function getSubjects(){
        $allSubjects = Subject::all();
        return $allSubjects;
    }

  
}