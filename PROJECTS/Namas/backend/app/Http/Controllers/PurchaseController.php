<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Purchase;

class PurchaseController extends Controller
{
       /**
       * Display a listing of the resource.
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
       */
      public function create(Request $request)
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
            return response('Error while creating Purchase ocured. Details : '.$e, 500);
          }
      }
  
      /**
       * Store a newly created resource in storage.
       */
      public function store()
      {
          //
      }
  
      /**
       * Display the specified resource.
       */
      public function show(Purchase $purchase)
      {

      }
  
      /**
       * Show the form for editing the specified resource.
       */
      public function edit(Purchase $purchase)
      {
          //
      }
  
      /**
       * Update the specified resource in storage.
       */
      public function update(Purchase $purchase)
      {
          //
      }
  
      /**
       * Remove the specified resource from storage.
       */
      public function destroy(Purchase $purchase)
      {
          //
      }

      // my functions:
      public function getByid($id){
        try {
          return Purchase::find($id);
        } catch(\Exception $e) {
          return response('Nepavyko gauti produkto duomenų', 500);
        }
      }
}
