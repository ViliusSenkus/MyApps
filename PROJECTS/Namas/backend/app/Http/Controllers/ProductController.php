<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Brand;

class ProductController extends Controller
{
   public function index()
   {
      try {
         return Product::all();
      } catch (\Exception $e) {
         return response("Server error -faux pas -" . $e, 500);
      }
   }
   public function store(Request $request)
   {
      try {
         Product::create($request->all());
         return response('Product ' . $request->name . ' created successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
   public function show(Product $product)
   {
      try {
         return Product::find($product);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, Product $product)
   {
      try {
         $old = $product->name;
         $product->update($request->all());
         return response('Product ' . $old . ' successfully changed to ' . $product->name, 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
   public function destroy(Product $product)
   {
      try {
         $product -> delete();
         return response('Product ' . $product->name . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   // MY FUNCTIONS

   public function withPurchase($id)
   {
      try {
         return Product::with('purchase')->get()->find($id);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function withBrand($id)
   {
      try {
         return Product::with('brand')->find($id);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
   public function withFullBrand($id)
   {
      try {

         // nebaigta funkcija
         $array = [];
         foreach(Product::with('brand')->get() as $brand) {
            array_push($array, Brand::with('manufacturer')->get()->find($brand));
         }
         return  $array;
         // Product::with('brand')->with('manufacturer')->get()->find($id);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
   public function full($id)
   {
      try {
         return Product::with('brand')->get()->find($id)->load('purchase');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
