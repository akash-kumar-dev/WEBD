<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Contact;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $students = Student::all();
        // $students = Student::with('get_contact')->get();

        // Applying conditions on 'get_contacts'
        // $students = Student::withWhereHas('get_contact', function ($query) {
        //     $query->where('address', 'Delhi');
        // })->get();

        $students = Student::where('gender', 'm')       // 'where' for searching in 'students' table
            ->withWhereHas('get_contact', function ($query) {       // 'withWhereHas' for searching in 'contacts' Table
                $query->where('address', 'fdvf');
            })->get();
        // if only used 'whereHas' then use for search but not returns data of contacts Table

        return $students;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $studnet = Student::create([
            'name' => 'name 1',
            'age' => '12',
            'gender' => 'F'
        ]);

        $studnet->get_contact()->create([
            'email' => 'admin@xyz.com',
            'phone' => '1234567890',
            'address' => 'new home',
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
