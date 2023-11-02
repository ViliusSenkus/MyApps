<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique()->comment('Supplier shop name, service provider name, or person name');
            $table->string('logo')->nullable()->comment('Link to supplier logo or picture');
            $table->string('link')->nullable()->comment('Link to supplier official page');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('suppliers');
    }
};
