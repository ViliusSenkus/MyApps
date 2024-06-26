<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class BuildingPhase extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = "building_phases";
    protected $fillable = ['name', 'description'];

    public function exactService(): HasMany
    {
        return $this->hasMany(Purchase::class);
    }
}
