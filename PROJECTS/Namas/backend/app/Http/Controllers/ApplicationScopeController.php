<?php

namespace App\Http\Controllers;

use App\Models\ApplicationScope;
use Illuminate\Http\Request;

class ApplicationScopeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            return ApplicationScope::all();
        }
        catch(\Exception $e){
            return response('error on collecting scopes from DB '.$e);
        }
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
    public function show(ApplicationScope $applicationScope)
    {
        return ApplicationScope::findOrFail($applicationScope->id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ApplicationScope $applicationScope)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ApplicationScope $applicationScope)
    {
        ApplicationScope::destroy($applicationScope->id);
        return response('scope with id '.$applicationScope->id.' deleted successfully');
    }
}
