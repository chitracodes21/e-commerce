<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/signup',[AuthController::class,'SignUp']);
Route::post('/login',[AuthController::class,'Login']);