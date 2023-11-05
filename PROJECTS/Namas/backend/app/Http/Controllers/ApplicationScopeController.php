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

   public function show(ApplicationScope $scope)
   {
      try {
         return $scope;
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, ApplicationScope $scope)
   {
      try {
         $old = $scope->name;
         $scope->update($request->all());
         return response('Application Scope with name ' . $old. ' was successfully changed to '. $request->name, 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function destroy(ApplicationScope $scope)
   {
      try {
         $scope->delete();
         return response('Scope ' . $scope->name . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }


   public function withSubScope(String $id)
   {
      try {
         return ApplicationScope::find($id)->load('applicationSubScope');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
