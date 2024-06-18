<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;

    // Inverse One to One Relationship
    public function get_student()
    {
        return $this->belongsTo(Student::class);
    }
}
