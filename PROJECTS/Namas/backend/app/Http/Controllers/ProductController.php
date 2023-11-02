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
         Product::created($request->all());
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
      //
   }

   public function destroy(Product $product)
   {
      try {
         Product::destroy($product);
         return response('Product ' . $product->name . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   // MY FUNCTIONS

   public function with_purchases(Product $product)
   {
      try {
         return Product::with('purchase')->find($product->id);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   //older version:
   // try{
   //   $data = [];
   //   array_push($data, Product::find($product));
   //   array_push($data, $product->serieProduct);
   //   return $data;
   // }
   // catch ( \Exception $e){
   //   return response('Server error on creating list of related products--- '.$e, 500);
   // }  

   public function with_brand(Product $product)
   {
      try {
         $brand = Brand::find($product->brand_id);
         return Brand::with('product')->find($brand->id);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
