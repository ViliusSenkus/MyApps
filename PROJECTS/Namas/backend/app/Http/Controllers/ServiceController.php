<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Service;

class ServiceController extends Controller
{
   public function index()
   {
      try {
         return Service::all();
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function store(Request $request)
   {
      try {
         Service::create(request()->all());
         return response('Service ' . $request->name . ' created successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function show(Service $service)
   {
      try {
         return Service::find($service);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function update(Request $request, Service $service)
   {
      try {
         $old = $service->name;
         $service->update($request->all());
         return response('Service ' . $old . ' successfully updated to ' . $service->name, 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function destroy(Service $service)
   {
      try {
         $service->delete();
         return response('Service ' . $service->type. ' ' . $service->name . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
