<?php

namespace App\Http\Controllers;

use App\Models\Manufacturer;
use Illuminate\Http\Request;

class ManufacturerController extends Controller
{
   public function index()
   {
      try {
         return Manufacturer::all();
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function store(Request $request)
   {
      try {
         $new=Manufacturer::create($request->all());
         return response($new->id, 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function show(Manufacturer $manufacturer)
   {
      try {
         return Manufacturer::find($manufacturer);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, Manufacturer $manufacturer)
   {
      try {
         $old = $manufacturer->name;
         $manufacturer->update($request->all());
         return response('Manufacturer ' . $old . ' successfully changed to ' . $manufacturer->name , 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function destroy(Manufacturer $manufacturer)
   {
      try {
         $manufacturer->delete();
         return response('Manufacturer ' . $manufacturer->name . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function withBrand($id)
   {
      try {
         return Manufacturer::with('brand')->get()->find($id);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
 
   public function full($id)
   {
      //reiki naudoti through reliacija.

      // try {
      //    $withBrand = Manufacturer::with('brand')->get()->find($id);
      //    $brandProduct = [];
      //    foreach ($withBrand as $key => $value) {
      //       array_push($brandProduct, $key, $value);
      //    }
      //    return $brandProduct;
      //    return Manufacturer::with('brand')->get()->find($id);
      // } catch (\Exception $e) {
      //    return response('Server error - faux pas - ' . $e, 500);
      // }
   }

   public function find(String $value)
   {
      try{
         return Manufacturer::where('name', 'like', '%'.$value.'%')->where('name','!=','Kitas')->take(4)->get()->merge(Manufacturer::where('name','Kitas')->get());
      } catch (\Exception $e) {  
         return response('paieška nepasileido'. $e, 500);
      }
   }
   
   public function last(){
      $list = Manufacturer::where('name','!=','Kitas')->get()->sortByDesc('created_at')->take(4);
      $other = Manufacturer::where('name','Kitas')->get();
      return $list->merge($other);
   }

   public function findOne(String $value)
   {
      try {
         return Manufacturer::where('name', 'like', $value)->get();
      } catch (\Exception $e) {
         return response ('gamintojas nerastas '. $e, 500);
      }
   }
}
