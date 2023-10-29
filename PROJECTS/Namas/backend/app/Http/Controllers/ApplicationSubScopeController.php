<?php

namespace App\Http\Controllers;

use App\Models\ApplicationSubScope;
use Illuminate\Http\Request;

class ApplicationSubScopeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       try{
        return ApplicationSubScope::all();
       }catch(\Exception $e){
            return response('error on collecting subscopes from DB '.$e);
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
    public function show(ApplicationSubScope $applicationSubScope){
        return ApplicationSubScope::find($applicationSubScope);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ApplicationSubScope $applicationSubScope)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ApplicationSubScope $applicationSubScope)
    {
        ApplicationSubScope::destroy($applicationSubScope->id);
        return response('Application sub scope, with ID'. $applicationSubScope->id.' deleted successfully');
    }
}
