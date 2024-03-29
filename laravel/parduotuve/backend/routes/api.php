<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ProductController;
use \App\Http\Controllers\CategoryController;

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
    Route::post('/',  [ProductController::class, 'create']);
    Route::get('/', [ProductController::class, 'index']);
    Route::get('/{id}', [ProductController::class, 'getProduct'])->where('id', '[0-9]+');
    Route::put('/{id}', [ProductController::class, 'update'])->where('id', '[0-9]+');
    Route::delete('/{id}', [ProductController::class, 'delete'])->where('id', '[0-9]+');
    Route::get('/search/{search}', [ProductController::class, 'search']);
});

Route::group(['prefix' => 'categories'], function () { 
    Route::post('/',  [CategoryController::class, 'create']);
    Route::get('/', [CategoryController::class, 'index']);
    Route::get('/{id}', [CategoryController::class, 'getCategory'])->where('id', '[0-9]+');
    Route::put('/{id}', [CategoryController::class, 'update'])->where('id', '[0-9]+');
    Route::delete('/{id}', [CategoryController::class, 'delete'])->where('id', '[0-9]+');
    // Route::get('/search/{search}', [CategoryController::class, 'search']);
});


