<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Menu extends Controller
{
    public function getMenu(){
        $name=print_r($_GET);
        return "<h2>Va - $name<h2>";
    }
}
