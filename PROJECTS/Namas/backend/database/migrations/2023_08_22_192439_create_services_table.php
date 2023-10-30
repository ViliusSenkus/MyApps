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
            $table->string('type', 255)->nullable(false)->comment('Type of service. ex: rent, drive');
            $table->string('provider', 255)->nullable(false)->comment('Provider of service. Company or private person');
            $table->string('provider_logo', 255)->nullable()->comment('Link to logo of service provider');
            $table->text('description')->nullable()->comment('General information on bunch of this service type. Just common information to all types');
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
