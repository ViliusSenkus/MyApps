<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Supplier keeps data of shops, store, private sellers, etc.
 * @package App\Models
 *
 * @property int $id
 * @property string $name
 * @property string $logo
 * @property string $link
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 **/

class Supplier extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "suppliers";

    protected $fillable = ['name', 'logo', 'link'];

    public function oerder() : HasMany
    {
        return $this->hasMany(Order::class);
    }
}
