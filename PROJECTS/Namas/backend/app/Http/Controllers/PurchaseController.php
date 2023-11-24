<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{

   public function index()
   {
      try {
         return Purchase::all();
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function store(Request $request)
   {
      try {
         Purchase::create($request->all());
         return response('Purchase for ' . $request->price_paid . ' EUR added successfully', 201);
      } catch (\Exception $e) {
         return 'Server error - faux pas - ';
      }
   }

   public function show(Purchase $purchase)
   {
      try {
         return Purchase::find($purchase);
      } catch (\Exception $e) {
         return response('Server error -faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, Purchase $purchase)
   {
      try {
         $old = $purchase->price_paid;
         $purchase->update($request->all());
         return response('Purchase for ' . $old . ' EUR successfully changed to ' . $purchase->price_paid, 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }


   public function destroy(Purchase $purchase)
   {
      try {
         $purchase->delete();
         return response('purchase for ' . $purchase->price_paid . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error -faux pas - ' . $e, 500);
      }
   }

   public function full($id)
   {
      try {
         return Purchase::find($id)->load('order')->load('buildingPhase')->load('applicationSubScope')->load('space')->load('product')->load('service');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
