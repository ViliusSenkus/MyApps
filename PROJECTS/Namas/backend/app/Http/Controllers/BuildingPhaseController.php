<?php

namespace App\Http\Controllers;

use App\Models\BuildingPhase;
use Illuminate\Http\Request;

class BuildingPhaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{return BuildingPhase::all();}
        catch(\Exception $e){return response('Error on collecting phases in database '.$e);}
      
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(BuildingPhase $buildingPhase)
    {
        return BuildingPhase::find($buildingPhase);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BuildingPhase $buildingPhase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BuildingPhase $buildingPhase)
    {
        BuildingPhase::destroy($buildingPhase);
        return ($buildingPhase.'--- Deleted successfully ---');
    }
}
