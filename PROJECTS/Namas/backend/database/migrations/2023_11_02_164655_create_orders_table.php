<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
             //this table holds information on all orders: and it's fivnanciall documentation, as well as status of order.

             //HINT:
             // with help of this table user can keep items, which are planned to buy.

             $table->id();
             $table->date('purchasement_date')->comment('Date of initial payment');
             $table->foreignId('supplier_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null')->comment('Shop, e-shop, company, person, etc. from where the purchase was made, or intended to be made');
             $table->enum('payment_method', ['cash', 'card', 'bank transfer'])->comment('select one of possible methods (cash, card or bank transfer)');
             $table->integer('discount')->default(0)->comment('Discount in percentages given to whole order, if wasn\'t applied to separate items');
             //list of documents of order:
             $table->string('offer_doc', 255)->nullable()->comment('Link to išankstinio apmokėjimo sąskaita faktūra');
             $table->string('purchase_doc', 255)->nullable()->comment('Link to pilnas vienkartinis atsiskaitymas');
             $table->string('prepay_doc', 255)->nullable()->comment('Link to avansinio mokėjimo pavedimas');
             $table->string('final_payment_doc', 255)->nullable()->comment('Link to galutinio mokėjimo pavedimas');
             $table->string('invoice')->nullable()->comment('Link to invoice after full payment');
             //end of documents
             $table->string('other_docs', 255)->nullable()->comment('Links to other docs, or e-shop order description and payments.');
             $table->text('comments')->nullable()->comment('comments on payment method or documents');
             $table->enum('status', ['planned', 'initiated', 'finished', 'canceled', 'first paiment maid', 'second paiment maid'])->default('finished')->comment('select one of possible status: planned, initiated, finished, canceled, first paiment maid, second paiment maid');
             $table->timestamps();
             $table->softDeletes()->invisible();
         });
     }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
