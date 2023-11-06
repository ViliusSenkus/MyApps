<?php

namespace App\Http\Controllers;

use App\Models\Space;
use Illuminate\Http\Request;

class SpaceController extends Controller
{
   public function index()
   {
      try {
         return Space::all();
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function store(Request $request)
   {
      try {
         Space::create($request->all());
         return response('Space ' . $request->name . ' created successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function show(Space $space)
   {
      try {
         return Space::find($space);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, Space $space)
   {
      try {
         $old = $space->name;
         $space->update($request->all());
         return response('Space ' . $old . ' successfully changed to ' . $space->name , 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function destroy(Space $space)
   {
      try {
         $space->delete();
         return response('Space ' . $space->name . ' deleted successfully');
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
