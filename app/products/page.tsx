import Cart from "@/components/Cart";
import { Product } from "@/types/product";
import React from "react";
import AddToCartButton from "./_components/AddToCartButton";

async function getProducts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // console.log({ res });

  const posts = await res.json();

  // Transform posts to look more like products
  const products = posts.map((post: any) => ({
    id: post.id,
    name: post.title,
    description: post.body.slice(0, 100) + "...",
    price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
  }));

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return products;
}
const ProductPage = async () => {
  const products = await getProducts();
  return (
    <div>
      <Cart />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product: Product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
              <AddToCartButton
                cartItem={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
