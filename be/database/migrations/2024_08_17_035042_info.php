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
        //
        Schema::create('info', function (Blueprint $table) {
            $table->id();
            $table->string('IdUserName');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('city');
            $table->string('district');
            $table->string('ward');
            $table->string('houseNumber');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('info');
    }
};