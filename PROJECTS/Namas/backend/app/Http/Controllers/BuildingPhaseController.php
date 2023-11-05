<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BuildingPhase;

use Illuminate\Support\Facades\DB;

class BuildingPhaseController extends Controller
{

   public function index()
   {
      return BuildingPhase::all();
   }

   public function store(Request $request)
   {
      try {
         BuildingPhase::create($request->all());
         return response('Building phase ' . $request->name . ' created successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function show(BuildingPhase $phase)
   {
      return BuildingPhase::find($phase);
   }

   public function update(Request $request, BuildingPhase $phase )
   {
      try {
         $old = $phase->name;
         $phase->update($request->all());
         return response('Building phase ' . $old . ' successfully changed to ' . $phase->name , 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
   public function destroy(BuildingPhase $phase)
   {
      try {
         $phase->delete();
         return ('Building phase ' . $phase->name . ' deleted successfully');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
