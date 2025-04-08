<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Service keeps the detailed information of a service such as a tools or car rents, services of workers, etc..
 * @package App\Models
 * @property int $id
 * @property string $name
 * @property string $description
 * @property int $building_phase_id
 * @property int $application_sub_scope_id
 * @property int $space_id
 * @property string|null $picture
 **/
class Service extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'services';
    protected $guarded = ['id','created_at','updated_at','deleted_at'];
}
