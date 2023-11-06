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
         return response('Order for date ' . $request->purchasement_date . ' created successfully', 201);
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
      try {
         $old = $order->purchasement_date;
         $order->update($request->all());
         return response('Order with date ' . $old . ' successfully changed to ' . $order->purchasement_date, 201);
      } catch (\Exception $e) {
         return response('Server error -faux pas - ' . $e, 500);
      }
   }

   public function destroy(Order $order)
   {
      try {
         $order->delete();
         return response('Order ' . $order->id . ' of date ' . $order->purchasement_date . ' deleted successfully', 200);
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }

   public function withPurchase($id)
   {
      try {
         return Order::with('purchase')->get()->find($id);
      } catch (\Exception $e) {
         return response('Server error -faux pas - ' . $e, 500);
      }
   }
   public function orderSum($id)
   {
      try {
         $order = Order::find($id)->load('purchase');
         $sum = 0;
         foreach ($order->purchase as $purchase) {
             $sum += $purchase->price_paid;
         }
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
            $total += $this->orderSum($order->id);
         };
         return $total;
      } catch (\Exception $e) {
         return response('Server error - faux pas - ' . $e, 500);
      }
   }
}
