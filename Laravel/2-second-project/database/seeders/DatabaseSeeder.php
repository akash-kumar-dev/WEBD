<?php

namespace Database\Seeders;

use App\Models\student;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // for seeder
        // $this->call([
        //     StudentSeeder::class
        // ]);

        // for Factory
        // student::factory()->count(20)->create();
        student::factory(10)->create();
    }
}
