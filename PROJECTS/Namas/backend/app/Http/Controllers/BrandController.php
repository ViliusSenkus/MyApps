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
         return Brand::find($id)->load('manufacturer');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
   public function withProduct($id)
   {
      try {
         return Brand::with('product')->get()->find($id);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function full($id)
   {
      try {
         return Brand::with('product')->get()->find($id)->load('manufacturer');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
