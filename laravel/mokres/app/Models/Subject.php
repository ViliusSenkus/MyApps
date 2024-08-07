<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject_name',
    ];

    public function users(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function notes(){
        return $this->hasMany(Note::class);
    }
}
