<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('building_phase_exact_product', function (Blueprint $table) {
            $table->id();
            $table->foreignId('building_phase_id')->constrained()->onDelete('cascade');
            $table->foreignId('exact_product_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('building_phase_exact_product');
    }
};
