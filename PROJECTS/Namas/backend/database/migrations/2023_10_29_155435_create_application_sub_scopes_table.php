<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('application_sub_scopes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('applicatio_scope_id')->constrained()->onUpdate('cascade')->onDelete('cascade')->nullable(false)->comment('Id number of application scope');
            $table->string('subscope', 100)->nullable(false)->comment('Exact place of product or service is intended to be used');
            $table->text('description')->nullable()->comment('Description of intended use');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('application_sub_scopes');
    }
};
