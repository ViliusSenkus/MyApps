<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('brands', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Name of brand');
            $table->foreignId('manufacturer_id')->constrained()->cascadeOnUpdate();
            $table->string('description')->nullable()->comment('Description of brand');
            $table->string('logo')->nullable()->comment('Link to brand logo');
            $table->string('link')->nullable()->comment('Link to official manufactorer website of this brand products');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('brands');
    }
};
