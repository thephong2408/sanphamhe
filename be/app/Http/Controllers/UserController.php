<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //
    public function run()
    {
        $brands = ['HP', 'Dell', 'Asus', 'Acer', 'LG', 'Lenovo'];
        $cpus = ['i3', 'i5', 'i7', 'i9'];
        $gpus = ['1050', '2040', '750', '1050TI'];
        $rams = ['4GB', '8GB', '16GB', '32GB', '64GB'];
        $storages = ['128GB', '256GB', '500GB'];
        $screens = ['14inch', '16inch', '17inch', '24inch', '27inch'];
        $categories = ['Văn phòng', 'Gaming', 'Đồ họa'];

        for ($i = 1; $i <= 200; $i++) {
            $brand = $brands[array_rand($brands)];
            $name = $brand . ' ' . rand(20, 100);
            $price = rand(8000000, 30000000); // 8 triệu đến 30 triệu
            $cpu = $cpus[array_rand($cpus)];
            $gpu = $gpus[array_rand($gpus)];
            $ram = $rams[array_rand($rams)];
            $storage = $storages[array_rand($storages)];
            $screen = $screens[array_rand($screens)];
            $category = $categories[array_rand($categories)];

            DB::table('laptops')->insert([
                'name' => $name,
                'price' => $price,
                'brand' => $brand,
                'CPU' => $cpu,
                'GPU' => $gpu,
                'RAM' => $ram,
                'Storage' => $storage,
                'Screen' => $screen,
                'Resolution' => '1920x1080', // Thêm độ phân giải cố định nếu cần
                'Battery' => 'Li-ion', // Thêm pin cố định nếu cần
                'Weight' => rand(1, 3) . 'kg', // Trọng lượng ngẫu nhiên
                'category' => $category,
                'time' => now(),
            ]);
        }
    }
    public function login(Request $request)
    {
        $validator1 = Validator::make($request->all(), [
            'id' => 'required|integer|regex:/^\d+$/',
        ]);
        if ($validator1->fails()) {
            return response()->json(['success' => false, 'msg' => 'Tên đăng nhập phải có độ dài từ 5-17 kí tự (không được có dấu cách)']);
        }
        $validator2 = Validator::make($request->all(), [
            'password' => 'required|string|min:6',
        ]);
        // Nếu dữ liệu password không hợp lệ, trả về thông báo lỗi
        if ($validator2->fails()) {
            return response()->json(['success' => false, 'msg' => 'Mật khẩu có ít nhất 6 kí tự']);
        }
        $user = DB::table('user')
            ->where('id', $request->input('id'))
            ->first();
        if ($user && Hash::check($request->input('password'), $user->password)) {
            $username = DB::table('user')
                ->where('id', $request->input('id'))
                ->pluck('username')
                ->first();
            return response()->json(['success' => true, 'id' => $request->input('id'), 'username' => $username]);
        }
        return response()->json(['success' => false, 'msg' => 'Tên người dùng hoặc mật khẩu không chính xác',]);
    }
    public function register(Request $request)
    {
        $validator1 = Validator::make($request->all(), [
            'name' => 'required|string',
        ]);
        if ($validator1->fails()) {
            return response()->json(['success' => false, 'msg' => 'Tên đăng nhập hợp lệ']);
        }
        $validator2 = Validator::make($request->all(), [
            'password' => 'required|string|min:6',
        ]);
        // Nếu dữ liệu password không hợp lệ, trả về thông báo lỗi
        if ($validator2->fails()) {
            return response()->json(['success' => false, 'msg' => 'Mật khẩu phải có ít nhất 6 kí tự']);
        }
        $validator3 = Validator::make($request->all(), [
            'phone' => 'required|number',
        ]);
        // Nếu dữ liệu password không hợp lệ, trả về thông báo lỗi
        if ($validator3->fails()) {
            return response()->json(['success' => false, 'msg' => 'Số điện thoại không hợp lệ']);
        }
        $validator4 = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);
        // Nếu dữ liệu password không hợp lệ, trả về thông báo lỗi
        if ($validator4->fails()) {
            return response()->json(['success' => false, 'msg' => 'Email không hợp lệ']);
        }
        $id = DB::table('users')->insertGetId([
            'name' => $request->input('name'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);
        return response()->json(['success' => true]);
    }
}
