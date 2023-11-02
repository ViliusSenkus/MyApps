<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class ApplicationScope extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = "application_scopes";
    protected $fillable = ['name', 'description'];

    public function applicationSubScope(): HasMany
    {
        return $this->hasMany(ApplicationSubScope::class);
    }
}
