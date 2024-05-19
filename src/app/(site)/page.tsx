import React from 'react'
import getProducts from '@/actions/get-products';
import productShuffle from '@/lib/products/product-shuffle';
import ProductGrid from "@/components/products/product-grid";



export default async function Home() {
  const products = await getProducts();

  const productData = await productShuffle(products);
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <ProductGrid products={productData} />
      </section>
    </>
  );
}