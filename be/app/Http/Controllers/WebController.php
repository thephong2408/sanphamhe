<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class WebController extends Controller
{
    //
    public function adjustCart(Request $request)
    {
        if (!$request->input('id_user')) {
            return response()->json(['success' => false]);
        }
        $cart = DB::table('cart')
            ->where('id_user', $request->input('id_user'))
            ->where('id_product', $request->input('id_product'))
            ->first();
        if ($cart) {
            DB::table('cart')
                ->where('id_user', $request->input('id_user'))
                ->where('id_product', $request->input('id_product'))
                ->update(['quantity' => $request->input('quantity')]);
        }
        return response()->json(['success' => true]);
    }
    public function deleteOne(Request $request)
    {
        if (!$request->input('id_user')) {
            return response()->json(['success' => false]);
        }
        $cart = DB::table('cart')
            ->where('id_user', $request->input('id_user'))
            ->where('id_product', $request->input('id_product'))
            ->first();
        if ($cart) {
            DB::table('cart')
                ->where('id_user', $request->input('id_user'))
                ->where('id_product', $request->input('id_product'))
                ->update(['quantity' => $cart->quantity - 1]);
        }
        return response()->json(['success' => true]);
    }
    public function addOne(Request $request)
    {
        if (!$request->input('id_user')) {
            return response()->json(['success' => false]);
        }
        $cart = DB::table('cart')
            ->where('id_user', $request->input('id_user'))
            ->where('id_product', $request->input('id_product'))
            ->first();
        if ($cart) {
            DB::table('cart')
                ->where('id_user', $request->input('id_user'))
                ->where('id_product', $request->input('id_product'))
                ->update(['quantity' => $cart->quantity + 1]);
        }
        return response()->json(['success' => true]);
    }
    public function addCart(Request $request)
    {
        if (!$request->input('id_user')) {
            return response()->json(['success' => false]);
        }
        $quantity = $request->input('quantity');
        $cart = DB::table('cart')
            ->where('id_user', $request->input('id_user'))
            ->where('id_product', $request->input('id_product'))
            ->first();
        if ($cart) {
            DB::table('cart')
                ->where('id_user', $request->input('id_user'))
                ->where('id_product', $request->input('id_product'))
                ->update(['quantity' => $cart->quantity + $quantity]);
        } else {
            DB::table('cart')->insert([
                'id_user' => $request->input('id_user'),
                'id_product' => $request->input('id_product'),
                'quantity' => $quantity,
            ]);
        }
        return response()->json(['success' => true]);
    }
    public function deleteCart(Request $request)
    {
        if (!$request->input('id_user')) {
            return response()->json(['success' => false]);
        }
        $cart = DB::table('cart')
            ->where('id_user', $request->input('id_user'))
            ->where('id_product', $request->input('id_product'))
            ->first();
        if ($cart) {
            $cart = DB::table('cart')
                ->where('id_user', $request->input('id_user'))
                ->where('id_product', $request->input('id_product'))
                ->delete();
        }
        return response()->json(['success' => true]);
    }
    public function getCart(Request $request)
    {
        if (!$request->input('id')) {
            return response()->json(['success' => false]);
        }
        $cart = DB::table('cart')->where('id_user', $request->input('id'))->get();
        return response()->json($cart);
    }
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
            return response()->json(['success' => true, 'username' => $user->name, 'id' => $user->id]);
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
