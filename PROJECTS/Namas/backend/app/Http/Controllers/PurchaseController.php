<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{

   public function index()
   {
      return Purchase::all();
   }

   public function store(Request $request)
   {
      try {
         $purchase = new Purchase();

         $purchase->supplier_id = $request->supplier_id;
         $purchase->building_phase_id = $request->building_phase_id;
         $purchase->application_sub_scope_id = $request->application_sub_scope_id;
         $purchase->space_id = $request->space_id;
         $purchase->type = $request->type;
         $purchase->product_id = $request->product_id;
         $purchase->service_id = $request->service_id;
         $purchase->standart_price = $request->standart_price;
         $purchase->price_paid = $request->price_paid;
         $purchase->quantity = $request->quantity;
         $purchase->documents = $request->documents;
         $purchase->discount_enabler = $request->discount_enabler;
         $purchase->link = $request->link;
         $purchase->description = $request->description;

         $purchase->save();

         return response('Purchase ' . $request->name . ' added successfully', 201);
         //return is usefull for testing. Later messege will be returned after creating full acquisition.
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function show(Purchase $purchase)
   {
      return Purchase::find($purchase);
   }

   public function update(Request $request, Purchase $purchase)
   {
      //
   }


   public function destroy(Purchase $purchase)
   {
      Purchase::destroy($purchase);
      return response('purchase of ' . $purchase . ' deleted', 200);
   }

   // mano funkcija naudojama vietoje defaultinės show
   // public function getByid($id){
   //   try {
   //     return Purchase::find($id);
   //   } catch(\Exception $e) {
   //     return response('Nepavyko gauti produkto duomenų', 500);
   //   }
}
