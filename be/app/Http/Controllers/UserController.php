<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //
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
            'username' => 'required|string',
        ]);
        if ($validator1->fails()) {
            return response()->json(['success' => false, 'msg' => 'Tên đăng nhập không được để trống']);
        }
        $validator2 = Validator::make($request->all(), [
            'password' => 'required|string|min:6',
        ]);
        // Nếu dữ liệu password không hợp lệ, trả về thông báo lỗi
        if ($validator2->fails()) {
            return response()->json(['success' => false, 'msg' => 'Mật khẩu phải có ít nhất 6 kí tự']);
        }
        $validator3 = Validator::make($request->all(), [
            'company' => 'required|string',
        ]);
        // Nếu dữ liệu password không hợp lệ, trả về thông báo lỗi
        if ($validator3->fails()) {
            return response()->json(['success' => false, 'msg' => 'Tên công ty không được để trống']);
        }
        $company_id = DB::table('company')->insertGetId([
            'company' => $request->input('company'),
        ]);
        $id = DB::table('user')->insertGetId([
            'username' => $request->input('username'),
            'password' => Hash::make($request->input('password')),
            'in_company' => $company_id,
            'is_manager' => 1,
        ]);
        return response()->json(['success' => true, 'id' => $id]);
    }
}
