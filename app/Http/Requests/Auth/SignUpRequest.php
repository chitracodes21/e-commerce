<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\BaseFormRequest;
use Illuminate\Validation\Rules\Password;

class SignUpRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "full_name" => ['required'],
            "email" => ['required', 'email', 'unique:users,email'],
            "password" => ['required', Password::min(6)->mixedCase()->letters()->numbers()->symbols(), 'confirmed'],
        ];
    }
}
