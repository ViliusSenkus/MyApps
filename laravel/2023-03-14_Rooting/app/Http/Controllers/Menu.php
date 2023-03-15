<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use Illuminate\Http\Request;

class Menu extends Controller
{

    public function getMenuByIndex(){
       $menu = MenuItem::find(1);
    }
}
