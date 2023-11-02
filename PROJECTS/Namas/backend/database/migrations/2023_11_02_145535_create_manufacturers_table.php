<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('manufacturers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique()->comment('Name of company creating products');
            $table->string('description')->nullable()->comment('Description of manufactorer');
            $table->string('logo')->nullable()->comment('Link to manufactorer logo');
            $table->string('link')->nullable()->comment('Link to official manufactorer website');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturers');
    }
};
