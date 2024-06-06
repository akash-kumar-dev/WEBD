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
        Schema::create('libraries', function (Blueprint $table) {
            $table->id();

            // Method -1
            // $table->unsignedBigInteger('stu_id');
            // $table->foreign('stu_id')
            //     ->references('id')
            //     ->on('students')
            //     ->onUpdate('cascade')   // By default 'restrict' instead of 'cascade' applied for no changes reflect in Tables
            //     // ->onDelete('cascade')  //on Deletion in Child Table also Remove the Parent Tabel Data
            //     ->onDelete('set null');


            // Method 2
            $table->foreignId('stu_id')->constrained('students')
                ->cascadeOnUpdate()->cascadeOnDelete();


            // Method 3
            // $table->foreignId('student_id')->constrained()
            //     ->cascadeOnUpdate()
            //     ->cascadeOnDelete();    // Auto Check "students" Table and serch "id" col.

            $table->string('book');
            $table->date('due_date')->nullable();
            $table->boolean('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('libraries');
    }
};
