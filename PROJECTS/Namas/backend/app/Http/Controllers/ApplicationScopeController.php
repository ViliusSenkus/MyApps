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

   public function show(ApplicationScope $applicationScope)
   {
      try {
         return ApplicationScope::find($applicationScope);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, ApplicationScope $applicationScope)
   {
      //
   }

   public function destroy(ApplicationScope $applicationScope)
   {
      try {
         ApplicationScope::destroy($applicationScope);
         return response('Scope ' . $applicationScope->name . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
