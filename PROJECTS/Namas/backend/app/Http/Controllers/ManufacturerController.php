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
         Manufacturer::create($request->all());
         return response('Manufacturer ' . $request->name . ' created successfully', 201);
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
      //
   }

   public function destroy(Manufacturer $manufacturer)
   {
      try {
         Manufacturer::destroy($manufacturer);
         return response('Manufacturer ' . $manufacturer->name . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
