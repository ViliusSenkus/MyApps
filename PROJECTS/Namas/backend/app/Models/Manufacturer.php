<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Manufacturer keeps data of purchased products manufacturers / companies.
 * @package App\Models
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $logo
 * @property string $link
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 **/

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
