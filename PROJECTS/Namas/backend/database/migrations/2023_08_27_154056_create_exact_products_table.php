<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('exact_products', function (Blueprint $table) {

            //this table contains information on all separatly purchased servicess (if service is purchased more than onces, all records of each separate purchase is here): information on service specifics, ammount/time it was used, etc.

            $table->id();
            $table->foreignId('serie_product_id')->constrained()->onUpdate('cascade')->onDelete('cascade')->nullable(false)->comment('Id of Exact product description');
            $table->text('description')->nullable()->comment('Detailed descrription of product characteristics not including in general description. Such as color, dimentions, etc.');
            $table->string('picture', 255)->nullable()->comment('Link to picture of product if differ from general product');
            $table->float('standart_price_at_a_moment', 8, 2)->unsigned();
            $table->float('price_paid', 8, 2)->unsigned()->nullable(false);
            $table->string('discount_enabler', 50)->nullable()->comment('discount card name, App name, etc.');
            $table->string('documents', 255)->nullable()->comment('links to any electronic documents avialable, such as guqrantees, instructions, offers, etc.');
            $table->float('quantity', 8, 2)->unsigned()->nullable(false);
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('exact_products');
    }
};
