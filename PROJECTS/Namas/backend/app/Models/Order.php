<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Order keeps the detailed information of a purchases made and/or services recieved at once and includes data such as payment method, or order documentation.
 * @package App\Models
 * @property int $id
 * @property string $purchasement_date
 * @property int $supplier_id
 * @property string $payment_method
 * @property float $discount
 * @property string|null $offer_doc
 * @property string|null $purchase_doc
 * @property string|null $prepay_doc
 * @property string|null $final_payment_doc
 * @property string|null $invoice
 * @property string|null $other_docs
 * @property string|null $comments
 * @property string|null $status
 **/
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