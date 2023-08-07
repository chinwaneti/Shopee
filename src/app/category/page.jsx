"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Categories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className='text-2xl font-semibold mb-6'>Store Products</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.length > 0 && (
          <>
            {renderProductSection(products.slice(0, 1), 'rounded-t-lg')}
            {renderProductSection(products.slice(1, 2), 'rounded-t-lg')}
            {renderProductSection(products.slice(5, 6))}
            {renderProductSection(products.slice(9, 10))}
            {renderProductSection(products.slice(12, 13))}
            {renderProductSection(products.slice(15, 16), 'rounded-b-lg')}
          </>
        )}
      </div>
    </div>
  );
}

function renderProductSection(productArray, additionalClasses = '') {
  return productArray.map(product => (
    <section
      key={product.id}
      className={`rounded-lg bg-white shadow-md p-6 space-y-2 ${additionalClasses}`}
    >
      <Link href={`category/${product.id}`}>
        <div className='h-40 relative'>
          <Image src={product.image} layout="fill" objectFit="contain" alt={product.title} />
        </div>
      </Link>
      <div className='font-semibold'>{product.title}</div>
      <p className='text-pink-500 font-semibold'>${product.price}</p>
    </section>
  ));
}
