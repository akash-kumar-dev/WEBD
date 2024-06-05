<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Schema::rename('students', 'student');  // Rename the Table
        Schema::dropIfExists('users');  // if 'users' method exists then drop
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
