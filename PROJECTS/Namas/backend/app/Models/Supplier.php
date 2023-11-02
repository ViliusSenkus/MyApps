<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Supplier extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "suppliers";

    protected $fillable = ['name', 'logo', 'link'];

    public function purchase() : HasMany
    {
        return $this->hasMany(Purchase::class);
    }
}
