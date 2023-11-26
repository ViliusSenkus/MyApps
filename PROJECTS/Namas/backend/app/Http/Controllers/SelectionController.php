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
      // if ($request->SupplierId != null || $request->ManufacturerId != null || $request->BrandId != null) {
      //    try {
      //       switch ($name) {
      //          case 'supplier':
      //             //gali du kartus pridėti reikšmę 'kitas'.
      //             $data = Purchase::select('supplier_id')->distinct()->take(3)->get();
      //             $selection = [];
      //             foreach ($data as $object) {
      //                array_push($selection, Supplier::find($object->supplier_id));
      //             }
      //             array_push($selection, Supplier::where('name', 'Kitas')->get());
      //             return $selection;

      //          case 'manufacturer':

      //             $productData = Purchase::select('product_id')->distinct()->orderBy('created_at')->get();

      //             $brandData = [];
      //             foreach ($productData as $item) {
      //                array_push($brandData, (Product::select('brand_id')->where('id', $item->product_id)->get())[0]);
      //             };

      //             $manufacturerData = [];
      //             foreach ($brandData as $item) {
      //                array_push($manufacturerData, (Brand::select('manufacturer_id')->where('id', $item->brand_id)->get())[0]);
      //             };

      //             $foreign_ids = array_map(function ($obj) {
      //                return $obj->manufacturer_id;
      //             }, $manufacturerData);
      //             $data = Manufacturer::all()->whereIn('id', $foreign_ids);

      //             return $data;

      //             //    $selection = [];
      //             //    foreach ($data as $object) {
      //             //       array_push($selection, Manufacturer::find($object->supplier_id));
      //             //    }
      //             //    array_push($selection, Supplier::where('name', 'Kitas')->get());
      //             //    return $selection;
      //          case 'brand':
      //             //CASE'as NEIŠDIRBTAS !!!!!!!!
      //             //gali du kartus pridėti reikšmę kitas.
      //             $data = Purchase::select('supplier_id')->groupBy('supplier_id')->take(3)->get();
      //             $selection = [];
      //             foreach ($data as $object) {
      //                array_push($selection, Supplier::find($object->supplier_id));
      //             }
      //             array_push($selection, Supplier::where('name', 'Kitas')->get());
      //             return $selection;
      //          default:
      //             return "unknown input field selected";
      //       }
      //    } catch (\Exception $e) {
      //       return response('Server error - faux pas - can\'t get Last Items' . $e, 500);
      //    }
      // } else {
      switch ($name) {
         case 'supplier':
            $data = Order::select('supplier_id')->whereNotNull('supplier_id')->distinct()->take(4)->get();
            $selection = [];
            foreach ($data as $object) {
               array_push($selection, Supplier::select('id', 'name', 'logo')->find($object->supplier_id));
            }
            return $selection;

         case 'manufacturer':
            $orders = Order::select('id')->where('supplier_id', $request->SupplierId)->distinct()->pluck('id');
            $products = Purchase::select('product_id')->whereIn('order_id', $orders)->whereNotNull('product_id')->distinct()->pluck('product_id');
            $brands = Product::select('brand_id')->whereIn('id', $products)->distinct()->pluck('brand_id');
            $manufacturers = [];
            foreach ($brands as $brand) {
               $objektas = new BrandController();
               $gamintojas = $objektas->withManufacturer($brand);
               array_push($manufacturers, $gamintojas->manufacturer);
            }
            return $manufacturers;
         // case 'manufacturer':
         //    // susirenkam užsakymų id pagal pasirinktos parduotuvės Id.  
         //    $orders = Order::select('id')->where('supplier_id', $request->SupplierId)->distinct()->get();
         //    //gražinamas objektas, ne masyvas [{"id":1},{"id":4},...] - užsakymų id.

         //    // kuriam masyvą su produktų id, kurie atitinka užsakymų id purchase lentelėje.
         //    $products = [];
         //    foreach ($orders as $order) {
         //       $element = Purchase::select('product_id')->where("order_id", $order->id)->whereNotNull('product_id')->distinct()->get();
         //       //atkiras elementas kuriamas, kad returne negauti masyvo masyve.
         //       array_push($products, $element[0]);
         //    }
         //    // gražinamas objektas [{"product_id": 7},{"product_id": 4},...}] - produktų id.

         //    $brands = [];
         //    foreach ($products as $product) {
         //       $element = Product::select('brand_id')->where('id', $product->product_id)->distinct()->get();
         //       if (!in_array($element[0], $brands)) {
         //          array_push($brands, $element[0]);
         //       }
         //    }

         //    $manufacturers = [];
         //    foreach ($brands as $brand) {
         //       $objektas = new BrandController();
         //       $gamintojas = $objektas->withManufacturer($brand->brand_id);
         //       array_push($manufacturers, $gamintojas->manufacturer);
         //    }
         //    return $manufacturers;

         case 'brand':
            return Manufacturer::withBrand($request->ManufacturerId);
         case 'product':
            $list = Product::where('name', '!=', 'Kitas')->get()->sortByDesc('created_at')->take(4);
            $other = Product::where('name', 'Kitas')->get();
            return $list->merge($other);
         default:
            return "unknown input field selected";
      }
   }
}
// }
