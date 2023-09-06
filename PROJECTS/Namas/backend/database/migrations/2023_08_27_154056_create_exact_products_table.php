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
        Schema::create('exact_products', function (Blueprint $table) {

    //this table contains information on all separatly purchased servicess (if service is purchased more than onces, all records of each separate purchase is here): inforation on service specifics, ammount/time it was used, etc.

            $table->id();
            $table->text('detailed_description')->nullable();   //characteristics not including in generall description. Such as color, dimentions, etc.
            $table->string('picture', 255)->nullable();         //if differ from general product.
            $table->float('standart_price_at_a_moment', 8, 2)->unsigned();
            $table->float('price_paid', 8, 2)->unsigned();
            $table->string('discount_enabler', 255)->nullable();//discount card name, etc.
            $table->string('documents', 255)->nullable();       //links to any electronic documents avialable
            $table->float('quantity', 8, 2)->unsigned();        //just positive numbers in SQL accepted.
            $table->timestamps();               //date record created or edited at
            $table->softDeletes()->invisible(); //date record deleted at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exact_products');
    }
};
