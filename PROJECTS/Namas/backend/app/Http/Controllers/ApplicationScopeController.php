<?php

namespace App\Http\Controllers;

use App\Models\ApplicationScope;
use Illuminate\Http\Request;

class ApplicationScopeController extends Controller
{
   public function index()
   {
      try {
         return ApplicationScope::all();
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function store(Request $request)
   {
      try {
         ApplicationScope::create($request->all());
         return response('Application scope ' . $request->name . ' created successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function show(String $id)
   {
      try {
         return ApplicationScope::find($id);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, string $id)
   {
      // return ('atsakymas '.$id.' ir '.$request->name);
      try {
ApplicationScope::find($id)->update($request->all());

         return response('Application Scope ' . $request->name . ' was changed successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function destroy(String $id)
   {
      try {
         ApplicationScope::destroy($id);
         return response('Scope ' . $id . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
