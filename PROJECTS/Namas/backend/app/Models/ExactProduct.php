<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExactProduct extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'exact_products';
    protected $guarded = false;
}
