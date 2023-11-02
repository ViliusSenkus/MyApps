<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'orders';
    protected $gurader = ['id', 'created_at', 'updated_at', 'deleted_at'];
    public function purchase(): HasMany
    {
        return $this->hasMany(Purchase::class);
    }
}
