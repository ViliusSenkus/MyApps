<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Space keeps data of parts of house.
 * @package App\Models
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 **/

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
