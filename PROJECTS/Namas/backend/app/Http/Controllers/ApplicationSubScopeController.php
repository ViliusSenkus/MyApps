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

   public function show(ApplicationSubScope $applicationSubScope)
   {
      try {
         return ApplicationSubScope::find($applicationSubScope);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, ApplicationSubScope $applicationSubScope)
   {
   }

   public function destroy(ApplicationSubScope $applicationSubScope)
   {
      try {
         ApplicationSubScope::destroy($applicationSubScope);
         return response('Application sub scope ' . $applicationSubScope->name . ' deleted successfully');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
