<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {

            $table->id();
            $table->text('description')->nullable()->comment('Generall information related to this product of this brand but independently from package or other similar specific factors');
            $table->foreignId('brand_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null');
            $table->string('package_type')->comment('ex: bucket, box, unpacked, etc.');
            $table->string('measurement_units')->comment('ex: kg, l, m3, units, etc.');
            $table->integer('ammount_in_unit')->unsigned()->nullable()->comment('Just number without the units. Measurement units mentioned in previous column');
            $table->string('measurement_units2')->nullable()->comment('ex: kg, l, m3, units, etc.');
            $table->integer('ammount_in_unit2')->unsigned()->nullable()->comment('Just number without the units. Measurement units mentioned in previous column)');
            $table->string('picture', 255)->nullable()->comment('Link to image from official product description');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
