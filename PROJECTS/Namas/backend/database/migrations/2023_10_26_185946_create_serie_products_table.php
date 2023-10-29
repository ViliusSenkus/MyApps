<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('serie_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->onUpdate('cascade')->onDelete('cascade')->comment('id of manufacturer brand at products table');
            $table->text('description')->nullable()->comment('information specific just to this entry');
            $table->string('package_type')->nullable(false)->comment('ex: bucket, box, unpacked, etc.');
            $table->string('measurement_units')->nullable(false)->comment('ex: kg, l, m3, units, etc.');
            $table->integer('ammount_in_unit')->unsigned()->nullable()->comment('Just number without the units. Measurement units mention in previous column');
            $table->string('picture', 255)->nullable()->comment('Link to image');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('serie_products');
    }
};
