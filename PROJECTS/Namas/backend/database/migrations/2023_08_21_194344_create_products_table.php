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
            $table->string('name', 255);
            $table->text('description')->nullable();
            $table->string('photo', 255)->nullable();
            $table->string('measurement_unit', 50);           
            $table->timestamps();                   //date record created or edited at
            $table->softDeletes()->invisible();     //date record deleted at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
