<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {

            $table->id();
            $table->enum('type', ['car rent', 'instrument rent', 'transportation', 'job'])->default('transportation');
            $table->string('name')->comment('Name of rented item, car or done job');
            $table->string('picture', 255)->nullable()->comment('Link to image from official webpage related to service');
            $table->string('link', 255)->nullable()->comment('Linkt to this service order page');
            $table->text('description')->nullable()->comment('General information on bunch of this service type. Just common information to all types');
            $table->string('accounting_unit1')->comment('units to be accounted for. Ex.: days, m3, km');
            $table->string('accounting_unit2')->comment('units to be accounted for. Ex.: days, m3, km');
            
            
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
