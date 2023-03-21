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
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->string('note', 1000)->default('nieko nepateikta');
            $table->foreignID('subject_id')
            ->nullable()
            ->constrained()
            ->onUpdate('no action')
            ->onDelete('set null');
            $table->foreignID('user_id')
            ->nullable()
            ->constrained()
            ->onUpdate('no action')
            ->onDelete('set null');
            $table->string('note_type', 30)->default('to learn');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notes');
    }
};
