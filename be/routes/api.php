<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


// Route::get('/user', function () {
//     return view('help');
// });
Route::get('/get-laptops', [UserController::class, 'getLaptops']);
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

