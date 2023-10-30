<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExactProduct extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'exact_products';
    protected $guarded = false;

    public function buildingPhase(): BelongsToMany
    {
        return $this->belongsToMany(BuildingPhase::class);
    }

    public function applicationSubScope(): BelongsToMany
    {
        return $this->belongsToMany(ApplicationSubScope::class);
    }
}
