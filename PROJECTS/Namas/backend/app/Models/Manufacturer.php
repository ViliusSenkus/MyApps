<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Manufacturer extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'manufacturers';
    protected $fillable = ['name', 'description', 'logo', 'link'];

    public function brand(): HasMany
    {
        return $this->hasMany(Brand::class);
    }

}
