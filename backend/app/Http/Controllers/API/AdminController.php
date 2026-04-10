<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\SaveProductRequest;
use App\Models\Product;

class AdminController extends Controller
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
    public function store(SaveProductRequest $request)
    {
        try {
            $product = Product::create($request->validated());
            return response()->json([
                "status" => true,
                "message" => "Product created successfully!",
                "product" => $product
            ], 201);
        } catch (\Exception $e) {
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
    public function update(SaveProductRequest $request, string $id)
    {
        $product = $this->getFindOrFail($id);
        try {
            $product->update($request->validated());
            return response()->json([
                "status" => true,
                "message" => "Product successfully updated",
                "product" => $product,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                "status" => false,
                "message" => "Something went to wrong!",
                "error" => $e->getMessage(),
                "error line no. " => $e->getLine()
            ], 500);
        }
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
            ], 204);
        }
    }
}
