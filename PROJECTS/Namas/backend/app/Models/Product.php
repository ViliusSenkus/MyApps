<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Product keeps the detailed information of a product including packaging options, colors, chemical constitution and other data.
 * @package App\Models
 * @property int $id
 * @property string $name
 * @property string $description
 * @property int $brand_id
 * @property string $package_type
 * @property string $measurement_units
 * @property float $ammount_in_unit
 * @property string $measurement_units2
 * @property float $ammount_in_unit2
 * @property string|null $picture
 **/

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'products';
    protected $fillable = [
        'name',
        'description',
        'brand_id',
        'package_type',
        'measurement_units',
        'ammount_in_unit',
        'measurement_units2',
        'ammount_in_unit2',
        'picture'
    ];

    public function purchase(): HasMany
    {
        return $this->hasMany(Purchase::class);
    }

    public function order()
    {
        return $this->hasManyThrough(Order::class, Purchase::class);
    }

    public function spaces()
    {
        return $this->belongsToMany(Space::class, 'purchases');
    }

    public function suppliers()
    {
        return $this->belongsToMany(Supplier::class, 'purchases');
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function manufacturer(): BelongsTo
    {
        return $this->belongsTo(Manufacturer::class, 'brand_id', 'id')
            ->through('brand');
    }
}
