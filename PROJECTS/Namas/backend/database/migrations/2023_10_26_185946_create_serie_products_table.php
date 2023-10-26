<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('serie_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->onUpdate('cascade')->onDelete('cascade')->comment('id of manufacturer brand at products table');
            $table->text('description')->nullable()->comment('information specific jsut to this entry');
            $table->string('package_type')->comment('ex: bucket, box, unpacked, etc.');
            $table->string('measurement_units')->comment('ex: kg, l, m3, units, etc.');
            $table->integer('ammount_in_unit');
            $table->string('picture',255)->nullable()->comment('link to image');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('serie_products');
    }
};
