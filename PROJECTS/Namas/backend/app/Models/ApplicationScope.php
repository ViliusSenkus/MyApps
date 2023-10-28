<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ApplicationScope extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = "application_scopes";
    protected $guarded = false;
}
