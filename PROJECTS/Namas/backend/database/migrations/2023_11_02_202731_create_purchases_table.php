<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('purchases', function (Blueprint $table) {
            
             /*
             This table contains information on all individual purchased service or product, even if purchased product is the same few times.
             All relations in project derives primaraly from this table.
             */

            $table->id();

            $table->foreignId('order_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null');
            $table->foreignId('supplier_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null')->comment('Shop, e-shop, company, person, etc. from where the purchase was made, or intended to be made');
            $table->foreignId('building_phase_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null')->comment('Phase for which the purchase was made, or intended to be made');
            $table->foreignId('application_sub_scope_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null')->comment('Building construction element for which the purchase was made, or intended to be made');
            $table->foreignId('space_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null')->comment('One or more rooms for which the purchase was made, or intended to be made');
            $table->enum('type',['product','service']);
            $table->foreignId('product_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null')->comment('If Product is the purchasement');
            $table->foreignId('service_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('set null')->comment('If Service is the purchasement');
           
            $table->float('standart_price', 8, 2)->unsigned()->nullable()->comment('Price without discounts or sale offers during purchasement moment from this supplier');
            $table->float('price_paid', 8, 2)->unsigned()->comment('Ammount of money payed or planned to be paid at the end of acquisition');
            $table->float('quantity1', 8, 2)->unsigned()->comment('Ammount of specified measurement/accountant units acquired');
            $table->float('quantity2', 8, 2)->unsigned()->nullable()->comment('Fill in just if second measurement/accountant unit mentioned in product or service description');
            $table->string('documents', 255)->nullable()->comment('Links to any electronic documents avialable, such as guarantees, instructions, offers, etc.');
            $table->string('discount_enabler', 50)->nullable()->comment('Discount card name, App name, etc.');
            $table->string('link', 255)->nullable()->comment('Link to product/service page in supplier e-store, if such exists');
            $table->text('description')->nullable()->comment('Detailed descrription of service, characteristics not included in higher level descriptions. Ex.: color, specific dimentions, material, etc.');
            
            $table->timestamps();
            $table->softDeletes()->invisible();
         });
     }

    public function down(): void
    {
        Schema::dropIfExists('purchases');
    }
};
