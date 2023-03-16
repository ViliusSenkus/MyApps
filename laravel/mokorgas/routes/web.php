<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('new-entry', function (){
    return view('newEntry');
});

Route::get('about', function(){
    return view('about');
});

Route::post('new-entry', function(){
    return view('search');
});

Route::get('new-subject', function(){
    return view('subject');
});

Route::post('new-subject', function(){
    return "Sėkmingai prideta";
});