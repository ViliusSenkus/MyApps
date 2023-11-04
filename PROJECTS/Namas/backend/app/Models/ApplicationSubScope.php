<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class ApplicationSubScope extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'application_sub_scopes';
    protected $fillable = ['name', 'description', 'application_scope_id'];

    public function purchase(): HasMany
    {
        return $this->hasMany(Purchase::class);
    }

    public function applicationScope(): BelongsToMany
    {
        return $this->belongsToMany(ApplicationScope::class);
    }
}