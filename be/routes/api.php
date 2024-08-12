<?php

use App\Http\Controllers\ShopController;
use Illuminate\Support\Facades\Route;


// Route::get('/user', function () {
//     return view('help');
// });
Route::get('/get-carts', [ShopController::class, 'getCarts']);
Route::get('/get-laptops', [ShopController::class, 'getLaptops']);
Route::post('/register', [ShopController::class, 'register']);
Route::post('/login', [ShopController::class, 'login']);

