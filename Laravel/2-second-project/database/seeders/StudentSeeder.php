<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\student;
use Illuminate\Support\Facades\File;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // saving Single Data
        // student::create([
        //     'name' => 'User 1',
        //     'email' => 'user1@email.com'
        // ]);

        // ------------------------------------------
        // saving from Array of Data
        // more about collect Method -> https://laravel.com/docs/11.x/collections
        // $students = collect(
        //     [
        //         [
        //             'name' => 'User 4',
        //             'email' => 'user4@email.com'
        //         ],
        //         [
        //             'name' => 'User 2',
        //             'email' => 'user2@email.com'
        //         ],
        //         [
        //             'name' => 'User 3',
        //             'email' => 'user3@email.com'
        //         ]
        //     ]
        // );


        // $students->each(function ($student) {
        //     student::insert($student);
        // });


        // --------------------------------
        // Using JSON
        $json = File::get(path: 'database/json/students.json');
        $students = collect(json_decode($json));     // json_decode: convert json Data in Array

        $students->each(function ($student) {
            student::create([
                'name' => $student->name,
                'email' => $student->email
            ]);
        });


        // -------------------------------------
        // Using faker generating Fake Data
        for ($i = 1; $i <= 30; $i++) {
            student::create([
                'name' => fake()->name(),
                'email' => fake()->unique()->email()
            ]);
        }
    }
}
