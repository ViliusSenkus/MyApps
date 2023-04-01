<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;

class ProductController extends Controller
{
     public function create(Request $request){
        try{
            // Product::create([
            //     'name' => $request -> name,
            //     'description' => $request -> description,
            //     'sku' => $request -> sku,
            //     'photo' => $request -> photo,
            //     'warehouse_qnt' => $request -> warehouse_qnt,
            //     'price' => $request -> price,
            //     // 'status' => $request -> status,
            // ]);

            $product = new Product;
            
            $product->name = $request -> name;
            $product->description = $request -> description;
            $product->sku = $request -> sku;
            $product->photo = $request -> photo;
            $product->warehouse_qnt = $request -> warehouse_qnt;
            $product->price = $request -> price;

            $product->save();

            $product->categories()->attach([1,3]);
            
            return "Produktas $request->name, sukurtas sėkmingai";
        }
        catch(\Exception $e ){
            return response("Naujo produkto sukurti nepavyko, įvyko klaida ~~~~~~~~~~~~~~ $e", 500);
        }
    }
    
    public function index(){
        // $data = Product::all();
        $data=Product::with('categories')->get();
        return $data;
    }

    public function getProduct($id){
        try{
            return Product::with('categories')->find($id);
        } catch (\Exception $e){
            return response("Produkto gauti nepavyko ~~~~~~~~~~ $e", 500);
        }
        
    }

    public function update(Request $request, $id){
        try{
        $product = Product::find($id);

        $product->name = $request->name;
        $product->description = $request -> description;
        $product->sku = $request->sku;
        $product->photo = $request->photo;
        $product->warehouse_qnt = $request->warehouse_qnt;
        $product->price = $request->price;
        $product->status = $request->status;

        $product->save();
        return 'Prekė sėkmingai atnaujinta';
        }
        catch(\Exception $e){
            $product = Product::find($id);
            return response("Pakeisti nepavyko, įvyko klaida ~~~~~~~~ $e", 500);
        }
    }
   
    public function delete($id){
        try{
            Product::find($id)->delete();
            return "produktas sėkmingai ištintas";
        }
        catch(\Exception $e){
            return response("Ištrinti nepavyko, įvyko klaida ~~~~~~~~~ $e ", 500);
        }
    }


// -----------------------------END OF CRUD FUNCTIONS-----------------------------


    public function search($s){
        try{
            return Product::where('name', 'LIKE', '%'.$s.'%')
                            ->orwhere('description', 'LIKE', '%'.$s.'%' )
                            ->orwhere(['sku' => $s])
                            ->get();
            // return "gera raidė $s";
        }catch(\Exception $e){
            return response ("Paieškos klaida ~~~~~~~~~~~~~~~~ $e", 500);
        }
    }



}