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
        Schema::create('students', function (Blueprint $table) {
            $table->integer('student_id');
            $table->string('name', 30);
            $table->string('email')->unique()->nullable();
            $table->float('percentage', 3, 2)->comment('Student Percentage');    // Before Decimal digit = 3, After Decimal digit = 2 
            $table->primary('student_id');
            $table->integer('age')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
