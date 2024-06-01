<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function showHome()
    {
        // return "<h1>Welcome to Controller</h1>";
        return view('ControllerLecture.welcome');
    }

    public function showUser(string $id)
    {
        // passing value
        // return view('ControllerLecture.user', ['id' => $id]);
        return view('ControllerLecture.user', compact('id'));   // compact function indicates here we have same name of key and Value
    }

    public function showBlog()
    {
        return view('ControllerLecture.blog');
    }
}