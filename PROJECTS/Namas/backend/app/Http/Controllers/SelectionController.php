<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Order;
use App\Models\Supplier;
use App\Models\Manufacturer;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Purchase;


class SelectionController extends Controller
{
   public function getLastItems(String $name, Request $request)
   {
      if ($request->SupplierId != null || $request->ManufacturerId != null || $request->BrandId != null) {
         try {
            switch ($name) {
               case 'supplier':
                  //gali du kartus pridėti reikšmę 'kitas'.
                  $data = Purchase::select('supplier_id')->distinct()->take(3)->get();
                  $selection = [];
                  foreach ($data as $object) {
                     array_push($selection, Supplier::find($object->supplier_id));
                  }
                  array_push($selection, Supplier::where('name', 'Kitas')->get());
                  return $selection;
               
               case 'manufacturer':

                  $productData = Purchase::select('product_id')->distinct()->orderBy('created_at')->get();
                  
                  $brandData = [];
                  foreach ($productData as $item){
                     array_push($brandData, (Product::select('brand_id')->where('id',$item->product_id)->get())[0]);
                  };

                  $manufacturerData = [];
                  foreach ($brandData as $item){
                     array_push($manufacturerData, (Brand::select('manufacturer_id')->where('id', $item->brand_id)->get())[0]);
                  };

                  $foreign_ids = array_map(function ($obj) {return $obj->manufacturer_id;}, $manufacturerData);
                     $data = Manufacturer::all()->whereIn('id', $foreign_ids);

                  return $data;
             
               //    $selection = [];
               //    foreach ($data as $object) {
               //       array_push($selection, Manufacturer::find($object->supplier_id));
               //    }
               //    array_push($selection, Supplier::where('name', 'Kitas')->get());
               //    return $selection;
               case 'brand':
                  //CASE'as NEIŠDIRBTAS !!!!!!!!
                  //gali du kartus pridėti reikšmę kitas.
                  $data = Purchase::select('supplier_id')->groupBy('supplier_id')->take(3)->get();
                  $selection = [];
                  foreach ($data as $object) {
                     array_push($selection, Supplier::find($object->supplier_id));
                  }
                  array_push($selection, Supplier::where('name', 'Kitas')->get());
                  return $selection;
               default:
                  return "unknown input field selected";
            }
         } catch (\Exception $e) {
            return response('Server error - faux pas - can\'t get Last Items' . $e, 500);
         }
      } else {
         switch ($name) {
            case 'supplier':
               $list = Supplier::where('name', '!=', 'Kitas')->get()->sortByDesc('created_at')->take(4);
               $other = Supplier::where('name', 'Kitas')->get();
               return $list->merge($other);
            case 'manufacturer' :
               $list = Manufacturer::where('name', '!=', 'Kitas')->get()->sortByDesc('created_at')->take(4);
               $other = Manufacturer::where('name', 'Kitas')->get();
               return $list->merge($other);
               case 'brand' :
                  $list = Brand::where('name', '!=', 'Kitas')->get()->sortByDesc('created_at')->take(4);
                  $other = Brand::where('name', 'Kitas')->get();
                  return $list->merge($other);
            default:
               return "unknown input field selected";
         }
      }
   }
}
