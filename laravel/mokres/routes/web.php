<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubjectController;

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
    return view('welcome');
});

Route::get('/dashboard', function () {
    $subjects = new SubjectController();
    $subjects = $subjects->getSubjects();
    return view('dashboard', ["subjects"=>$subjects]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/dashboard/', [SubjectController::class, 'addSubject']);   //nukreipimas i kontrolerį
});

require __DIR__.'/auth.php';

Route::get('/{id}', function($id){
    $subjects = new SubjectController();
    $subjects = $subjects->getSubjects();
    return view('subject', ["id"=>$id, "subjects"=>$subjects]); 
})->middleware(['auth', 'verified'])->name('subject');


 
 

/* routingo būdai:
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);

keliems būdams iš karto:
Route::match(['get', 'post'], '/', function () {
    // ...
});
 
Visiems būdams iš karto:
Route::any('/', function () {
    // ...
});

su GET, POST, PATCH, DELETE perduodamomis formomis būtina naudoti @csrf, kitaip užklausa bus atmetama.


REDIRECT metodas:
Route::redirect('/here', '/there', 301);
arba
Route::permanentRedirect('/here', '/there');

VIEW metodas:





*/

?>