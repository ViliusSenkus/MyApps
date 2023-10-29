<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {

            //this table holds generall information of products ever purchased in any quantities from any vendor. Just general information about product related to all purchases is stored here. This table is to notice, that  the product overall existed in project.

            $table->id();
            $table->string('manufacturer', 50)->nullable(false)->comment('Producer of product');
            $table->string('brand', 255)->nullable()->comment('Brand name, serie name of product');
            $table->text('description')->nullable()->comment('Just generall information related to bunch of this product');
            $table->string('logo', 255)->nullable()->comment('Link to manufacturer and/or brand logo in one file');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
