<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;

class ProductController extends Controller
{
     public function create(Request $request){
        try{
            Product::create([
                'name' => $request -> name,
                'description' => $request -> description,
                'sku' => $request -> sku,
                'photo' => $request -> photo,
                'warehouse_qnt' => $request -> warehouse_qnt,
                'price' => $request -> price,
                // 'status' => $request -> status,
            ]);
            return "Produktas $request->name, sukurtas sėkmingai";
        }
        catch(\Exception $e ){
            return response("$e Naujo produkto sukurti nepavyko, įvyko klaida", 500);
        }
    }
    
    public function index(){
        $data = Product::all();
        return $data;
    }

    public function getProduct($id){
        try{
            return Product::find($id);
        } catch (\Exception $e){
            return response("Produkto gauti nepavyko $e", 500);
        }
        
    }

    public function update(Request $request, $id){
        try{
        $product = Product::find($id);

        $product->name = $request->name;
        $product->description = $request -> description;
        $product->sku = $request->sku;
        $product->photo = $request->photo;
        $product->warehouse_qty = $request->warehouse_qty;
        $product->price = $request->price;
        $product->status = $request->status;

        $product->save();
        return 'Prekė sėkmingai atnaujinta';
        }
        catch(\Exception $e){
            return response("Pakeisti nepavyko, įvyko klaida \/n $e", 500);
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

}