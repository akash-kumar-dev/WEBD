<?php

use Illuminate\Support\Facades\Route;
use PhpOffice\PhpSpreadsheet\Chart\Layout;

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

// Named Routes
Route::get('/about', function () {
    return view('about');
})->name('mypost');
// no effect of change the URL of Route

// Redirect
// Route::redirect('/test', '/about');     // /test route redirects to /about route
Route::redirect('/test', '/about', 301);    // 301 Status Code for Permanent Redirect

// Route Group
Route::prefix('page')->group(function () {
    Route::get('/about', function () {
        return "<h1>About</h1>";        // /page/about
    });
    Route::get('/post/firstpost', function () {
        return "<h1>First Post</h1>";        // /page/post/firstpost
    });
});

// 404 Page
Route::fallback(function () {
    return "<h1>Page Not Found.</h1>";
});


Route::prefix('/new/home')->group(function () {
    Route::get('/', function () {
        return view('newPages.home');
    })->name('newHome');

    Route::get('/about', function () {
        return view('newPages.about');
    })->name('newAbout');
});

Route::get('/js/test', function () {
    return view('jsTest');
});

function getUsers()
{
    return [
        1 => ['name' => 'User1', 'phone' => '1234567890', 'city' => 'Delhi'],
        2 => ['name' => 'User2', 'phone' => '1234567890', 'city' => 'Dehradun'],
        3 => ['name' => 'User3', 'phone' => '1234567890', 'city' => 'Hyderabad'],
    ];
}


// Passing Data Route to view
Route::get('user', function () {
    $name = "User 1";

    // 3 Methods for same
    // return view('users', ['user' => $name, 'city' => "Mumbai"]);

    // return view('users')->with('user', $name)->with('city', 'Delhi');

    // return view('users')->withUser($name)->withCity('Delhi');

    // for Passing Objects of Array
    $names = getUsers();

    return view('users', ['user' => $names]);
});

Route::get('/user/{id}', function ($id) {
    $users = getUsers();
    abort_if(!isset($users[$id]), 404);

    $user = $users[$id];

    return view('user', ['id' => $user]);
})->name('view.user');