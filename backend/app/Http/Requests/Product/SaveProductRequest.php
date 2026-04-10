<?php

namespace App\Http\Requests\Product;

use App\Http\Requests\BaseFormRequest;

class SaveProductRequest extends BaseFormRequest
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
            "name" => ['required', 'string'],
            "price" => ['required', 'numeric'],
            "slug" => ['required', 'string'],
            "description" => ['required', 'string'],
            'product_img_path' => ['required'],
            'category_id' => ['required']
        ];
    }
}
