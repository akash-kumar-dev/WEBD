<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserController2;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::controller(UserController::class)->group(function () {
    Route::get('/', 'showUsers')->name('home');
    Route::get('/user/{id}', 'singleUser')->name('view.user');
    Route::get('/add', 'addUser');
    Route::get('/update', 'updateUser');
    Route::get('/delete/{id}', 'deleteUser')->name('delete.user');
});


Route::view('newuser', '/adduser');

Route::controller(UserController::class)->group(function () {
    Route::post('/adduser', 'addUser2')->name('addUser');
    Route::get('/updatepage/{id}', 'updatePage')->name('update.page');
    Route::put('/update/{id}', 'update')->name('update.user');
});

// Route::resource('users2', UserController2::class);

// Route::resource('users2', UserController2::class)->only([
//     'create',
//     'update',
//     'show'
// ]);
// samew as ->except([]) method

// chnaging default names
Route::resource('users2', UserController2::class)->names([
    'create' => 'users2.build',
    'show' => 'users2.view'
]);

// Nested Resource Controller
Route::resource('users2.comment', CommentController::class);