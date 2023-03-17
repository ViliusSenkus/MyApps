<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Subject;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public static function homePage(){
        $subject = Subject::all();
        if (count($subject)<1)
            return "Informacija iš konteinerio - jokių įrašų dar nėra, reikia peradresuoti į nulinį puslapį";
        
            return view('userHome');
    }
}
