<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SerieProduct extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'serie_products';
    protected $guarded = false;

    public function product(){
        return $this->belongsTo(Product::class);
    }
    

}
