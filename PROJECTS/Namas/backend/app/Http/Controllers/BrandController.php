<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{

   public function index()
   {
      try {
         return Brand::all();
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function store(Request $request)
   {
      try {
         Brand::create($request->all());
         return response('Brand ' . $request->name . ' created successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function show(Brand $brand)
   {
      try {
         return Brand::find($brand);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, Brand $brand)
   {
      try {
         $old = $brand->name;
         $brand->update($request->all());
         return response('Brand name ' . $old . ' successfully changed to ' . $request->name, 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function destroy(Brand $brand)
   {
      try {
         $brand->delete();
         return response('Brand ' . $brand->name . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
   
   public function withManufacturer($id)
   {

      try {
         // return Brand::find($id)->load('manufacturer'); 
         /*
         * Lazy Loading: Pirma užkrauna Brand, tada atskirai užkrauna manufacturer
         * Generuoja SQL užklausas atskirai:
         * 
         * SELECT * FROM brands WHERE id = ?
         * -- Tada, kai bandoma pasiekti manufacturer:
         * SELECT * FROM manufacturers WHERE id = ?
         * 
         * Naudingas kai jau turime Brand objektą ir tik tada nusprendžiame, kad reikia manufacturer
         * Mažiau efektyvus kai dirbame su kolekcijomis
         */
         return Brand::with('manufacturer')->find($id);
         /*
         * Eager Loading: Pirma užkrauna Brand ir manufacturer kartu
         * Generuoja SQL užklausas kartu:
         * 
         * SELECT * FROM brands WHERE id = ?
         * SELECT * FROM manufacturers WHERE id IN (?)
         * 
         * Naudingas kai dirbame su kolekcijomis
         * Efektyvesnis kai reikia daug susijusių duomenų
         */
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function withProduct($id)
   {
      try {
         return Brand::with('products')->find($id);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function full($id)
   {
      try {
         // return Brand::with('products')->get()->find($id)->load('manufacturer');
         return Brand::with(['products', 'brand.manufacturer'])->find($id);
      // EXAMPLE OF returning JSON
      //    {
      //       "id": 1,
      //       "name": "Samsung",
      //       "manufacturer_id": 5,
      //       "created_at": "2025-04-10T10:00:00.000000Z",
      //       "updated_at": "2025-04-10T10:00:00.000000Z",
      //       "products": [
      //           {
      //               "id": 1,
      //               "name": "Galaxy S21",
      //               "brand_id": 1,
      //               "price": 899.99,
      //               "created_at": "2025-04-10T10:00:00.000000Z",
      //               "updated_at": "2025-04-10T10:00:00.000000Z"
      //           },
      //           {
      //               "id": 2,
      //               "name": "Galaxy Tab S7",
      //               "brand_id": 1,
      //               "price": 649.99,
      //               "created_at": "2025-04-10T10:00:00.000000Z",
      //               "updated_at": "2025-04-10T10:00:00.000000Z"
      //           }
      //       ],
      //       "brand": {
      //           "manufacturer": {
      //               "id": 5,
      //               "name": "Samsung Electronics",
      //               "country": "South Korea",
      //               "created_at": "2025-04-10T10:00:00.000000Z",
      //               "updated_at": "2025-04-10T10:00:00.000000Z"
      //           }
      //       }
      //   }
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   
   public function find(String $value)
   {
      try{
         return Brand::where('name', 'like', '%'.$value.'%')->where('name','!=','Kitas')->take(4)->get()->merge(Brand::where('name','Kitas')->get());
      } catch (\Exception $e) {  
         return response('paieška nepasileido'. $e, 500);
      }
   }
   
   public function last(){
      $list = Brand::where('name','!=','Kitas')->get()->sortByDesc('created_at')->take(4);
      $other = Brand::where('name','Kitas')->get();
      return $list->merge($other);
   }
}
