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
        Schema::create('purchases', function (Blueprint $table) {

        //this table holds information on all purchases (products and servicess).

            $table->id();
            $table->date('purchase_date');
            $table->string('purchase_place', 255);
            $table->string('payment_method', 255);                  //cash, card, bank transfer ...
            // $table->float('total_payed', 8, 2)->unsigned();      //must be counted for all exact_products or exact_services included in this purchase. Method should be added into Model file.
            $table->json('list_of_exact_purchases_ids');            //json string should contain exact_products or exact_services ids, ---- detailed description, purchased ammount, price, discount, etc...

            //list of documents of purchase
            $table->string('offer_doc', 255)->nullable()->comment('išankstinio apmokėjimo sąskaita faktūra');
            $table->string('purchase_doc', 255)->nullable()->comment('pilnas vienkartinis atsiskaitymas');
            $table->string('prepay_doc', 255)->nullable()->comment('avansinio mokėjimo pavedimas');
            $table->string('final_payment_doc', 255)->nullable()->comment('galutinio mokėjimo pavedimas');
            $table->string('invoice')->nullable()->comment('sąskaita faktūra po pilno atsiskaitymo');   //čia galima pridėti ir garantinius dokumentus arba juos dėti su exact_product / service.
            $table->string('other_docs', 255)->nullable()->comment('e-parduotuvėje laikomi užsakymo ir/ar apmokėjimo aprašymai');
            
            $table->text('coments')->nullable();                     //for comments on payment method or documents.
            
            // $table->integer('warehouse_qty')->default(0);
            // $table->float('price', 12, 2)->unsigned();
            // $table->boolean('status')->default(true);
            
            $table->timestamps();
            $table->softDeletes()->invisible();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchases');
    }
};
