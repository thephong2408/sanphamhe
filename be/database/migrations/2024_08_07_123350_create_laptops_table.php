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
        Schema::create('laptops', function (Blueprint $table) {
            $table->id(); // ID tự động tăng
            $table->string('name'); // Tên laptop
            $table->string('img'); // Ảnh có nền trắng
            $table->integer('price'); // Giá tiền
            $table->string('brand'); // Thương hiệu
            $table->string('CPU'); // CPU
            $table->string('RAM'); // RAM
            $table->string('GPU'); // GPU
            $table->string('Storage'); // Lưu trữ
            $table->string('Screen'); // Màn hình
            $table->string('Resolution'); // Độ phân giải
            $table->string('Battery'); // Pin
            $table->string('Weight'); // Cân nặng
            $table->string('category'); // Loại: Văn phòng, Gaming, hoặc Đồ họa
            $table->timestamp('time'); // Thời gian nhập hàng
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('laptops');
    }
};
