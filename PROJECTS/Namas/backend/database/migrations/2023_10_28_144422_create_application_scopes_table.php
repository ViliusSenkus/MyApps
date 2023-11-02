<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('application_scopes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->nullable(false)->unique()->comment('Idea where product or service intended to be used at, very generall');;
            $table->text('description')->nullable()->comment('Short generall description');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('application_scopes');
    }
};
