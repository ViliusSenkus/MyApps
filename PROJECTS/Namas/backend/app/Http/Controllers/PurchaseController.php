<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Purchase;

class PurchaseController extends Controller
{
       /**
       * Display a listing of the resource.
       * 
       * GET api/purchase
       */
      public function index()
      {
          try{
            return Purchase::all();
          }
          catch(\Exception $e){
            return response("nieko gero, klaidos".$e, 500);
          }
      }
  
      /**
       * Show the form for creating a new resource.
       * 
       * GET api/purchase/create
       */
      public function create()
      {
          
      }
  
      /**
       * Store a newly created resource in storage.
       * 
       * POST api/purchase
       */
      public function store(Request $request)
      {
        try {
          $data = new Purchase;

          $data->purchase_date = $request->purchase_date;
          $data->purchase_place = $request->purchase_place;
          $data->payment_method = $request->payment_method;
          $data->offer_doc = $request->offer_doc;
          $data->purchase_doc = $request->purchase_doc;
          $data->prepay_doc = $request->prepay_doc;
          $data->final_payment_doc = $request->final_payment_doc;
          $data->invoice = $request->invoice;
          $data->other_docs = $request->other_docs;
          $data->coments = $request->comments;
          $data->finished = $request->finished;

          $data->save();
          
          return 'Purchase added successfully';
        } 
        catch (\Exception $e) {
          return response('Error while creating Purchase occured. Details : '.$e, 500);
        }
      }
  
      /**
       * Display the specified resource.
       * 
       * GET api/purchase/{id}
       */
      public function show(Purchase $purchase){
        return Purchase::find($purchase);
      }
  
      /**
       * Show the form for editing the specified resource.
       * 
       * GET api/purchase/{id}/edit
       */
      public function edit(Purchase $purchase)
      {
          //
      }
  
      /**
       * Update the specified resource in storage.
       * 
       * PUT/PATCH api/purchase/{id}
       */
      public function update(Purchase $purchase)
      {
          //
      }
  
      /**
       * Remove the specified resource from storage.
       * 
       * DELETE api/purchase/{id}
       */
      public function destroy(Purchase $purchase)
      {
          $purchase->delete();
          return response('ištrinta sėkmingai', 200);
      }

      // mano funkcija naudojama vietoje defaultinės show
      // public function getByid($id){
      //   try {
      //     return Purchase::find($id);
      //   } catch(\Exception $e) {
      //     return response('Nepavyko gauti produkto duomenų', 500);
      //   }
      // }
}
