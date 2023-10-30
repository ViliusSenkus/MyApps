<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class ApplicationSubScope extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'application_sub_scopes';

    protected $guarded = false;

    public function exactProduct(): BelongsToMany
    {
        return $this->belongsToMany(ExactProduct::class);
    }

    public function exactService(): BelongsToMany
    {
        return $this->belongsToMany(ExactService::class);
    }
}