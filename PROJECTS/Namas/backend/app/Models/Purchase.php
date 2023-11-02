<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

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

    public function supplier() : BelongsTo
    {
        return $this->belongsTo(Supplier::class);
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