<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $data = \App\Models\Product::all();
        return $data;
    }
}
