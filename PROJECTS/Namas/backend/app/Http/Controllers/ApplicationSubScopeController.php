<?php

namespace App\Http\Controllers;

use App\Models\ApplicationSubScope;
use Illuminate\Http\Request;

class ApplicationSubScopeController extends Controller
{
   public function index()
   {
      try {
         return ApplicationSubScope::all();
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function store(Request $request)
   {
      try {
         ApplicationSubScope::create($request->all());
         return response('Application sub scope ' . $request->name . ' created successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function show(ApplicationSubScope $subscope)
   {
      try {
         return $subscope;
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, ApplicationSubScope $subscope)
   {
      try {
         $old = $subscope->name;
         $subscope->update($request->all());
         return response('Application Sub Scope with name ' . $old . ' updated successfully to ' . $subscope->name , 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function destroy(ApplicationSubScope $subscope)
   {
      try {
         $subscope->delete();
         return response('Application sub scope ' . $subscope->name . ' deleted successfully');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
      
   public function withScope($id)
   {

      try {
         return ApplicationSubScope::find($id)->with('applicationScope')->get();
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function withPurchase($id)
   {
      try {
         return ApplicationSubScope::find($id)->load('purchase');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
