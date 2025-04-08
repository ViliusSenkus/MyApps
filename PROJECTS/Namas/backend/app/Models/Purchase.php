<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Purchase keeps the detailed information of a one product or service purchase including data such as price paid or discount. Many purchases can be made for the same order.
 * @package App\Models
 * @property int $id
 * @property int $order_id
 * @property int $building_phase_id
 * @property int $application_sub_scope_id
 * @property int $space_id
 * @property int $product_id
 * @property int $service_id
 * @property string $description
 * @property float $ammount
 * @property string $measurement_units
 * @property float $ammount_in_unit
 * @property string|null $picture
 **/

class Purchase extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'purchases';
    protected $guarded = false;

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function buildingPhase() : BelongsTo
    {
        return $this->belongsTo(BuildingPhase::class);
    }

    public function applicationSubScope() : BelongsTo
    {
        return $this->belongsTo(ApplicationSubScope::class);
    }

    public function space() : BelongsTo
    {
        return $this->belongsTo(Space::class);
    }

    public function product() : BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function service() : BelongsTo  
    {
        return $this->belongsTo(Service::class);
    }
}