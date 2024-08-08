<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // ID tự động tăng
            $table->string('name'); // Tên người dùng
            $table->string('email')->unique(); // Email, duy nhất
            $table->string('phone'); // Số điện thoại
            $table->string('password'); // Mật khẩu
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
