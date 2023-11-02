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
      //
   }

   public function destroy(Brand $brand)
   {
      try {
         Brand::destroy($brand);
         return response('Brand ' . $brand->name . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
