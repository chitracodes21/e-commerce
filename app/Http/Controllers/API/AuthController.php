<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
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
    }
}
