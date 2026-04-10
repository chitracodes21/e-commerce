<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->get();
        return response()->json([
            "status" => true,
            "message" => "Products fetched successfully!",
            "products" => $products
        ], 200);
    }
}
