<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'products'], function () { 
    Route::get('/', [ProductController::class, 'index']);
    Route::delete('/{id}', [ProductController::class, 'delete'])->where('id', '[0-9]+');
    Route::put('/{id}', [ProductController::class, 'update'])->where('id', '[0-9]+');
    Route::post('/',  [ProductController::class, 'create']);
});

