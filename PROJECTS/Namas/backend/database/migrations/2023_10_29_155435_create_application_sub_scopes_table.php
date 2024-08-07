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
            $table->string('name', 100)->comment('Exact place of product or service is intended to be used');
            $table->text('description')->nullable()->comment('Description of intended use');
            $table->foreignId('application_scope_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null')->comment('Id number of application scope');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('application_sub_scopes');
    }
};
