<?php

use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Route;


// Route::get('/user', function () {
//     return view('help');
// });
Route::post('/admin', [WebController::class, 'adminPage']);
Route::post('/history', [WebController::class, 'history']);
Route::post('/submit', [WebController::class, 'submit']);
Route::post('/get-cart', [WebController::class, 'getCart']);
Route::post('/add-cart', [WebController::class, 'addCart']);
Route::post('/delete-cart', [WebController::class, 'deleteCart']);
Route::post('/adjust-cart', [WebController::class, 'adjustCart']);
Route::post('/delete-one', [WebController::class, 'deleteOne']);
Route::post('/add-one', [WebController::class, 'addOne']);
Route::get('/get-laptops', [WebController::class, 'getLaptops']);
Route::post('/register', [WebController::class, 'register']);
Route::post('/login', [WebController::class, 'login']);
Route::post('/add-laptop', [WebController::class, 'addLaptop']);

