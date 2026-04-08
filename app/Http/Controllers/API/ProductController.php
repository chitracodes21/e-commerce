<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    protected function getFindOrFail($id)
    {
        return Product::with("category")->findOrFail($id);
    }

    public function index()
    {
        $products = Product::with('category')->get();
        return response()->json([
            "status" => true,
            "message" => "Products fetched successfully!",
            "products" => $products
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            "name" => ['required' | 'string'],
            "price" => ['required' | 'numeric'],
            "slug" => ['required' | 'string'],
            "description" => ['required' | 'string'],
            'product_img_path' => ['required'],
            'category_id' => ['required']
        ]);
        if ($validate->fails()) {
            return response()->json([
                "status" => false,
                "message" => "Validation failed",
                "errors" => $validate->errors()
            ]);
        }
        try {
            $product = Product::create($validate->validated());
            return response()->json([
                "status" => true,
                "message" => "Product created successfully!",
                "product" => $product
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                "status" => false,
                "message" => "Server error occurred",
                "error" => $e->getMessage(),
                "error line no. " => $e->getLine()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = $this->getFindOrFail($id);
        return response()->json([
            "status" => true,
            "message" => "Product fetched successfully!",
            "product" => $product
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = $this->getFindOrFail($id);
        $validate = Validator::make($request->all(), [
            "name" => ['required'],
            "price" => ['required'],
            "slug" => ['required'],
            "description" => ['required'],
            'product_img_path' => ['required'],
            'category_id' => ['required']
        ]);
        if ($validate->fails()) {
            return response()->json([
                "status" => false,
                "message" => "Validation failed",
                "errors" => $validate->errors()
            ]);
        }
        $product->update($validate->validated());
        return response()->json([
            "status" => true,
            "message" => "Product successfully updated",
            "product" => $product,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = $this->getFindOrFail($id);
        $product->delete();
        if ($product) {
            return response()->json([
                "status" => true,
                "message" => "Product deleted successfully!",
            ], 200);
        }
    }
}
