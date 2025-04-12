<?php

use App\Http\Controllers\ApplicationScopeController;
use App\Http\Controllers\ApplicationSubScopeController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\BuildingPhaseController;
use App\Http\Controllers\ManufacturerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SelectionController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SpaceController;
use App\Http\Controllers\SupplierController;
use App\Models\Manufacturer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Sanctum;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Non standart Laravel routes
Route::post('/find/{name}', [SelectionController::class, 'getLastItems']);

Route::group(['prefix' => 'supplier'], function () {
    Route::get('/search/{value}', [SupplierController::class, 'find']);
    Route::get('/last', [SupplierController::class, 'last']);
});

Route::group(['prefix' => 'manufacturer'], function () {
    Route::get('/search/{value}', [ManufacturerController::class, 'find']);
    Route::get('/last', [ManufacturerController::class, 'last']);
    Route::get('/{id}/brand', [ManufacturerController::class, 'withBrand']);
    Route::get('/{id}/full', [ManufacturerController::class, 'full']);
    Route::get('/name/{name}', [ManufacturerController::class, 'findOne']);
});
Route::group(['prefix' => 'brand'], function () {
    Route::get('/search/{value}', [BrandController::class, 'find']);
    Route::get('/last', [BrandController::class, 'last']);
    Route::get('/brand/{id}/manufacturer', [BrandController::class, 'withManufacturer']);
    Route::get('/brand/{id}/product', [BrandController::class, 'withProduct']);
    Route::get('/brand/{id}/full', [BrandController::class, 'full']);
});

Route::prefix('product')->group(function () {
    // Base CRUD routes
    Route::apiResource('/', ProductController::class);

    // Basic relationships
    Route::get('/{id}/purchase', [ProductController::class, 'withPurchase']);
    Route::get('/{id}/brand', [ProductController::class, 'withBrand']);
    Route::get('/{id}/spaces', [ProductController::class, 'withSpaces']);
    Route::get('/{id}/suppliers', [ProductController::class, 'withSuppliers']);
    Route::get('/{id}/order', [ProductController::class, 'withOrder']);
    
    // Combined relationships
    Route::get('/{id}/brand-manufacturer', [ProductController::class, 'withBrandAndManufacturer']);
    Route::get('/{id}/purchase-order', [ProductController::class, 'withPurchaseAndOrder']);
    Route::get('/{id}/spaces-suppliers', [ProductController::class, 'withSuppliersAndSpaces']);
    
    // Full details
    Route::get('/{id}/full-details', [ProductController::class, 'withFullDetails']);
});

Route::get('purchase/{id}/full', [PurchaseController::class, 'full']);

Route::get('/scope/{id}/subScope', [ApplicationScopeController::class, 'withSubScope']);
Route::get('/subscope/{id}/scope', [ApplicationSubScopeController::class, 'withScope']);
Route::get('/subscope/{id}/purchase', [ApplicationSubScopeController::class, 'withPurchase']);
Route::get('/order/total', [OrderController::class, 'totalSpending']);
Route::get('/order/{id}/sum', [OrderController::class, 'orderSum']);
Route::get('/order/{id}/purchase', [OrderController::class, 'withPurchase']);

//default API RESTful routes:
Route::apiResource('/scope', ApplicationScopeController::class);
Route::apiResource('/subscope', ApplicationSubScopeController::class);
Route::apiResource('/brand', BrandController::class);
Route::apiResource('/phase', BuildingPhaseController::class);
Route::apiResource('/manufacturer', ManufacturerController::class);
Route::apiResource('/order', OrderController::class);
Route::apiResource('/product', ProductController::class);
Route::apiResource('/purchase', PurchaseController::class);
Route::apiResource('/service', ServiceController::class);
Route::apiResource('/space', SpaceController::class);
Route::apiResource('/supplier', SupplierController::class);




// Route::resource('purchase', PurchaseController::class)->only(['index','store', 'show', 'update','destroy']);
// Route::apiResource('product', ProductController::class); // API (html) Resource Route destroy
// Route::get('/product/{product}/serie', [ProductController::class, 'show_SerieProducts']);
// Route::apiResource('phase', BuildingPhaseController::class);
// Route::apiResource('scope', ApplicationScopeController::class);
// Route::apiResource('subscope', ApplicationSubScopeController::class);



// Route::group(['prefix' => 'purchases'], function(){
//     Route::get('/', [PurchaseController::class, 'index']);
//     Route::get('/{product}', [PurchaseController::class, 'getByid']);
//     Route::post('/', [PurchaseController::class, 'create']);

    // Route::middleware('auth:sanctum')->post('/', [PurchaseController::class, 'create']);
// });