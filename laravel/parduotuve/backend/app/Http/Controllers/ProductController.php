<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $data = Product::all();
        return $data;
    }

    public function delete($id){
        try{
            Product::find($id)->delete();
            return "produktas sėkmingai ištintas";
        }
        catch(\Exception $e){
            return response("$e Ištrinti nepavyko, įvyko klaida", 500);
        }
    }

}
