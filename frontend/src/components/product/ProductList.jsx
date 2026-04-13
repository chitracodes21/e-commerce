import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import apiClient from "../../services/apiClient";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    apiClient.get("/products").then(({ data: responseData }) => {
      setProducts(responseData.products);
    });
  }, []);
  console.log(products);
  return (
    <>
      <div className="section-title">
        <h2>Trending Products</h2>
      </div>
      <div className="products">
        {products.map((product, i) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image = {product.product_img_path}
              category={product.category.name}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
