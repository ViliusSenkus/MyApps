<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
   public function index()
   {
      return Supplier::all();
   }

   public function store(Request $request)
   {
      try {
         Supplier::create($request->all());
         return response('Suplier ' . $request->name . ' created successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function show(Supplier $supplier)
   {
      return Supplier::find($supplier);
   }

   public function update(Request $request, Supplier $supplier)
   {
      try {
         $old = $supplier->name;
         $supplier->update($request->all());
         return response('Supplier ' . $old . ' successfully changed to ' . $supplier->name , 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function destroy(Supplier $supplier)
   {
      try {
         $supplier->delete();
         return response('Supplier ' . $supplier->name . ' deleted successfully', 500);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
