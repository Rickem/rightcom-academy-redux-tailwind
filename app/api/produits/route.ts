import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Transform posts to look more like products
    const products = posts.map((post: any) => ({
      id: post.id,
      name: post.title,
      description: post.body.slice(0, 100) + "...",
      price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
    }));

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
