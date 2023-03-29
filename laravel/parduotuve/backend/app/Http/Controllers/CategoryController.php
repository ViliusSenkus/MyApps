<?php

namespace App\Http\Controllers;

use App\Models\Category;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function create(Request $request){
        try{
            Category::create([
                'name' => $request -> name,
            ]);
            return "Kategorija $request->name, sukurta sėkmingai";
        }
        catch(\Exception $e ){
            return response("Naujos kategorijos sukurti nepavyko, įvyko klaida ~~~~~~~~~~~~~~ $e", 500);
        }
    }
    
    public function index(){
        $data = Category::all();
        return $data;
    }

    public function getCategory($id){
        try{
            return Category::find($id);
        } catch (\Exception $e){
            return response("Kategorijos gauti nepavyko ~~~~~~~~~~ $e", 500);
        }
        
    }

    public function update(Request $request, $id){
        try{
        $data = Category::find($id);

        $data->name = $request->name;

        $data->save();
        return 'Kategorija sėkmingai pervadinta';
        }
        catch(\Exception $e){
            $product = Category::find($id);
            return response("Pervadinti nepavyko, įvyko klaida ~~~~~~~~ $e", 500);
        }
    }
   
    public function delete($id){
        try{
            Category::find($id)->delete();
            return "kategorija sėkmingai ištinta";
        }
        catch(\Exception $e){
            return response("Ištrinti nepavyko, įvyko klaida ~~~~~~~~~ $e ", 500);
        }
    }


// -----------------------------END OF CRUD FUNCTIONS-----------------------------


    // public function search($s){
    //     try{
    //         return Product::where('name', 'LIKE', '%'.$s.'%')
    //                         ->orwhere('description', 'LIKE', '%'.$s.'%' )
    //                         ->orwhere(['sku' => $s])
    //                         ->get();
    //         // return "gera raidė $s";
    //     }catch(\Exception $e){
    //         return response ("Paieškos klaida ~~~~~~~~~~~~~~~~ $e", 500);
    //     }
    // }
}
