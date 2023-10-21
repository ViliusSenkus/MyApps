<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;

class ProductController extends Controller
{
      /**
       * Display a listing of the resource.
       */
      public function index()
      {
        try{
            return Product::all();
          }
          catch(\Exception $e){
            return response("atsitiko serverio klaida".$e, 500);
          }
      }
  
      /**
       * Show the form for creating a new resource.
       */
      public function create()
      {
          //
      }
  
      /**
       * Store a newly created resource in storage.
       */
      public function store(Request $request)
      {

        try {
            $data = new Product;

            $data->manufacturer = $request->manufacturer;
            $data->name = $request->name;
            $data->description = $request->description;
            $data->photo = $request->photo;
            $data->measurement_unit = $request->measurement_unit;

            $data->save();
            
            return ('Product added successfully');
          } 
          catch (\Exception $e) {
            return response('Error while creating Product occured. Details : '.$e, 500);
          }
      }
  
      /**
       * Display the specified resource.
       */
      public function show(Product $product)
      {
          return Product::show($product) ;
      }
  
      /**
       * Show the form for editing the specified resource.
       */
      public function edit(Product $product)
      {
          //
      }
  
      /**
       * Update the specified resource in storage.
       */
      public function update(Product $product)
      {
          //
      }
  
      /**
       * Remove the specified resource from storage.
       */
      public function destroy(Product $product)
      {
        $product->delete();
        return response('ištrinta sėkmingai', 200);
      }
}
