<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    public function users(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function subjects(){
        return $this->belongsTo(User::class, 'subject_id');
    }
}
