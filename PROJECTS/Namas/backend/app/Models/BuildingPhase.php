<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class BuildingPhase keeps the detailed information of a building phase such as planning, exterior, interior, etc.
 * @package App\Models
 * @property int $id
 * @property string $name
 * @property string $description
 **/
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
