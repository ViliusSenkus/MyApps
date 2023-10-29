<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('building_phases', function (Blueprint $table) {
            $table->id();
            $table->string('phase', 50)->nullable(false)->comment('Name of building phase');
            $table->text('description')->nullable()->comment('Short generall description, limitation of phase');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('building_phases');
    }
};
