<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/post', function () {
//     return view('posts');
//     // return "<h1>Post Page<h1/>";
// });

Route::view('/post', 'posts');  // route Name, views -> blade.php file name

// Route Parameters
// Route::get('/posts/{id}', function (string $id) {
//     return "<h1>Post ID : " . $id . "</h1>";
// });

// Routes optional Parametrs
// Route::get('/posts/{id?}', function (string $id = null) {
//     if ($id) {
//         return "<h1>Post ID : " . $id . "</h1>";
//     } else {
//         return "<h1>No ID found</h1>";
//     }
// });

// Routes Multiple Parameters input
Route::get('/posts/{id?}/comment/{commentid?}', function (string $id = null, string $comment = null) {
    if ($id) {
        return "<h1>Post ID : " . $id . "</h1><h2>Comment ID : " . "$comment" . "</h2>";
    } else {
        return "<h1>No ID found</h1>";
    }
});

// Route Constraints
Route::get('/users/{id}', function (string $id) {
    return "<h1>Post ID : " . $id . "</h1>";
})->whereNumber('id');  // only numeric value can parse with id now

Route::get('/users2/{id}', function (string $id) {
    return "<h1>Post ID : " . $id . "</h1>";
})->whereAlpha('id');  // only Alphabatic value can parse with id now

// ->whereAlphaNumberic('id');      // for alphabatic and Numerics value only

// -> whereIn('id', ['movie', 'song', 'painting']);     // only choose any value from given array only

// ->where('id', '[0-9]+');      // Regular expression for integers only

// ->where('id', '[a-zA-Z]+');

// Routes COnstraints on mltiple Inputs
Route::get('/posts2/{id}/comment/{commentid}', function (string $id, string $comment) {
    return "<h1>Post ID : " . $id . "</h1><h2>Comment ID : " . "$comment" . "</h2>";
})->where('id', '[0-9]+')->whereAlpha('commentid'); // id for integer only and comments for Alphabates only