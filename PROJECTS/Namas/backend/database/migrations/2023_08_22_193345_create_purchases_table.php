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
            // $table->float('total_payed', 8, 2)->unsigned(); //must be counted from exact_product or exact_service included in this purchase
            $table->json('list_of_exact_purchases_ids'); 
                //json string should consist product or service id, detailed description, purchased ammount, price, discount, etc...

                //further strings (documents) require a more detailed analysis of necessity
            $table->string('purchase_doc', 255)->nullable();
            $table->string('prepay_doc', 255)->nullable();
            $table->string('final_payment_doc', 255)->nullable();
            $table->string('offer_doc', 255)->nullable();
            $table->string('other_doc', 255)->nullable();

            $table->string('payment_method', 255); //cash, card, bank transfer ...
            
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
