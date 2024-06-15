<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\XyzController;
use Illuminate\Support\Facades\Route;

Route::resource('/users', UserController::class);
