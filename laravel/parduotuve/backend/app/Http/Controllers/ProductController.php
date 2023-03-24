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


    public function create(Request $request){
        try{
            Product::create([
                'name' => $request -> name,
                'description' => $request -> description,
                'sku' => $request -> sku,
                'photo' => $request -> photo,
                'warehouse_qnt' => $request -> warehouse_qnt,
                'price' => $request -> price,
                'status' => $request -> status,
            ]);
            return "Produktas sukurtas sėkmingai";
        }
        catch(\Exception $e ){
            return response("$e Naujo produkto sukurti nepavyko, įvyko klaida", 500);
        }
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

    public function update($id, $array){
        try{
            $product = Product::find($id);
            foreach($array as $key=>$value){
                $product->update([
                    $key => $value
                ]);
            }
        }
        catch(\Exception $e){
            return response("$e Pakeisti nepavyko, įvyko klaida", 500);
        }
    }
}
