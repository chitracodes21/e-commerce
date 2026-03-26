<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function SignUp(Request $req)
    {
        $userValidate = Validator::make($req->all(), [
            "full_name" => ['required'],
            "email" => ['required', 'email', 'unique:users,email'],
            "password" => ['required', Password::min(6)->mixedCase()->letters()->numbers()->symbols(), 'confirmed'],
        ]);
        if ($userValidate->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $userValidate->errors()
            ], 422);
        }
        try {
            $user = User::create([
            "full_name" => $req->full_name,
            "email" => $req->email,
            "password" => $req->password,
        ]);
            return response()->json([
                'success' => true,
                'message' => 'User registered successfully',
                'user' => $user
            ], 201);
        
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'User registration failed'
            ],500);
        }
    }
}
