<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'orders';
    protected $gurader = ['id', 'created_at', 'updated_at', 'deleted_at'];
    protected $fillable = ['purchasement_date', 'supplier_id', 'payment_method', 'discount', 'offer_doc', 'purchase_doc','prepay_doc','final_payment_doc','invoice','other_docs','comments','status'];
    public function purchase(): HasMany
    {
        return $this->hasMany(Purchase::class);
    }


public function supplier() : BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

}