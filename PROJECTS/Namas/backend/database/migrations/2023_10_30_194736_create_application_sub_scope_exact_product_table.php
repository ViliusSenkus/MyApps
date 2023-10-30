<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('application_sub_scope_exact_product', function (Blueprint $table) {
            $table->id();
            $table->foreignId('application_sub_scope_id')->constrained()->onDelete('cascade');
            $table->foreignId('exact_product_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('application_sub_scope_exact_product');
    }
};
