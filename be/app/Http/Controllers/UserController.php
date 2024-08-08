<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //
    public function getLaptops()
    {
        $laptops = DB::table('laptops')->get();
        return response()->json($laptops);
    }
    public function login(Request $request)
    {
        $validator1 = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);
        if ($validator1->fails()) {
            return response()->json(['success' => false, 'msg' => 'Email không hợp lệ']);
        }
        $validator2 = Validator::make($request->all(), [
            'password' => 'required|string|min:6',
        ]);
        // Nếu dữ liệu password không hợp lệ, trả về thông báo lỗi
        if ($validator2->fails()) {
            return response()->json(['success' => false, 'msg' => 'Mật khẩu có ít nhất 6 kí tự']);
        }
        $user = DB::table('users')
            ->where('email', $request->input('email'))
            ->first();
        if ($user && Hash::check($request->input('password'), $user->password)) {
            return response()->json(['success' => true, 'username' => $user->name, 'phone' => $user->phone]);
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
            'phone' => 'required|string',
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
