<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {

    //this table holds generall information of servicess ever purchased in any way from any provider. Just general information about service related to all purchases is stored here. This table is to notice, that the service overall was used in a project.

            $table->id();
            $table->string('name', 255);
            $table->text('description')->nullable();
            $table->timestamps();               //date record created or edited at
            $table->softDeletes()->invisible(); //date record deleted at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
