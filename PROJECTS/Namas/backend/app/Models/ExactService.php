<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ExactService extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'exact_services';
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
