<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\JsonController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\XyzController;
use Illuminate\Support\Facades\Route;

Route::resource('/users', UserController::class);

Route::resource('students', StudentController::class);
Route::get('/contact', [ContactController::class, 'show']);

Route::resource('json', JsonController::class);