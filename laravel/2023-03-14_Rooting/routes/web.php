<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Menu;

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


$nav=array("Home", "Services", "Why us", "Our Works", "We are noticed", "Recomendations", "Prices", "Contacts");

// Route::get('/', function () {
//     return view('header', ["navigationLinks"=>["Home", "Services", "Why us", "Our Works", "We are noticed", "Recomendations", "Prices", "Contacts"]]);
// });

// Route::get('/Home', [Menu::class, 'getMenu']);

Route::get('/', function (){
    global $nav;
    return view('home', ["hhh"=>$nav]);
});
Route::get('/Home', function (){
    $menu=new Menu();
    $menu->getMenu();
    return view('home');
});

Route::get('/Services', function (){
    return view('services', ["services"=>["Simple page", "Landing page","SPA","Complex page"]]);
});

Route::get('/Why us', function (){
    return view('whyUs');
});

Route::get('/Our Works', function (){
    return view('works', ["works"=>["SuperJob", "PupperDupper","WooHoo"]]);
});

Route::get('/We are noticed', function (){
    return view('noticed', ["notes"=>["Web", "TV","Newspaper"]]);
});

Route::get('/Recomendations', function (){
    return view('recomendations', ["recomendations"=>["John Smith", "Lady Ann"]]);
});

Route::get('/Prices', function (){
    return view('prices', ["prices"=>["10EUR", "20EUR","30EUR"]]);
});

Route::get('/Contacts', function (){
    return view('contacts', ["contacts"=>["email"=>"vilius@mail.lt", "address"=>"Big streat 25, Vilnius","Phone"=>"+37054255684"]]);
});