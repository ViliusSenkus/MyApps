<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('purchases', function (Blueprint $table) {

            //this table holds information on all purchases: inforation on purchasement place and date, payment method and purchasement documents.

            $table->id();
            $table->date('purchase_date')->nullable(false)->comment('Date of initial payment');
            $table->string('purchase_place', 255)->nullable(false)->comment('Shop name, internet shop address, person name, etc.');
            $table->enum('payment_method', ['cash', 'card', 'bank transfer'])->nullable(false)->comment('select one of possible methods (cash, card or bank transfer)');
            //list of documents of purchase:
            $table->string('offer_doc', 255)->nullable()->comment('Link to išankstinio apmokėjimo sąskaita faktūra');
            $table->string('purchase_doc', 255)->nullable()->comment('Link to pilnas vienkartinis atsiskaitymas');
            $table->string('prepay_doc', 255)->nullable()->comment('Link to avansinio mokėjimo pavedimas');
            $table->string('final_payment_doc', 255)->nullable()->comment('Link to galutinio mokėjimo pavedimas');
            $table->string('invoice')->nullable()->comment('Link to invoice after full payment');
            //end of documents
            $table->string('other_docs', 255)->nullable()->comment('Links to other docs, or e-shop order description and payments.');
            $table->text('comments')->nullable()->comment('comments on payment method or documents');
            $table->boolean('finished')->default(true);
            $table->timestamps();
            $table->softDeletes()->invisible();

            // $table->float('total_payed', 8, 2)->unsigned();      //must be counted for all exact_products and exact_services included in this purchase. Method should be added into Controller file.

            // $table->json('list_of_exact_purchases_ids');        //should contain exact_products or exact_services ids. Should be kept in separate relational tables - purchases_products_ids and purchases_services_ids;
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchases');
    }
};
