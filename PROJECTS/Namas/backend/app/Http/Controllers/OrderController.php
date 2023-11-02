<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
   public function index()
   {
      try {
         return Order::all();
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function store(Request $request)
   {
      try {
         Order::create($request->all());
         return response('Order for ' . $request->date . ' created successfully', 201);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
   public function show(Order $order)
   {
      try {
         return Order::find($order);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
   public function update(Request $request, Order $order)
   {
      //
   }

   public function destroy(Order $order)
   {
      try {
         Order::destroy($order);
         return response('Order ' . $order->id . ' of date ' . $order->date . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function orderSum(Order $order)
   {
      try {
         $sum = $order->purchase->sum('price_paid');
         $totalOrderSum = $sum - (($sum / 100) * $order->discount);
         return $totalOrderSum;
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function totalSpending()
   {
      try {
         $total = 0;
         foreach (Order::all() as $order) {
            $total += $this->orderSum($order);
         };
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
