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

   public function show(BuildingPhase $buildingPhase)
   {
      return BuildingPhase::find($buildingPhase);
   }

   public function update(Request $request, BuildingPhase $buildingPhase)
   {
      //
   }
   public function destroy(BuildingPhase $buildingPhase)
   {
      try {
         BuildingPhase::destroy($buildingPhase);
         return ('Building phase ' . $buildingPhase->name . ' deleted successfully');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
