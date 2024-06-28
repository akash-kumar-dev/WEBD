<?php

namespace App\Http\Controllers;

use App\Models\Json;
use Illuminate\Http\Request;

class JsonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Json::get();
        return Json::find(3)->meta_data['address']['city'];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $test = new Json;
        // $test->meta_data = [
        //     'name' => 'Anonymous',
        //     'email' => 'anonymous@gmail.com',
        //     'mobile_number' => '1234567890',
        // ];
        // $test->save();


        $temp = Json::create([
            'meta_data' => [
                'name' => 'Johan',
                'email' => 'Johan@gmail.com',
                'mobile_number' => '7164728131231',
                'address' => [
                    'street' => '#242 KK',
                    'city' => 'Delhi',
                    'country' => 'India',
                ]
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
