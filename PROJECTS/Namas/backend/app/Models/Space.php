<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Space extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'spaces';
    protected $fillable = ['name','description'];

    public function purchases(): HasMany
    {
        return $this->hasMany(Purchase::class);
    }
    
}
