<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    protected $fillable = ['name', 'price', 'slug', 'description', 'product_img_path', 'category_id'];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
