"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
    } else {
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, allProducts]);

  return (
    <div className="relative w-[50%]">
      <input
        type="search"
        placeholder=" &nbsp;  Search products..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className='text-black w-full  h-9 border-4'
      />

      {searchQuery.trim() !== '' && (
        <div className="bg-white text-black absolute mt-1 p-2 w-full">
          {filteredProducts.length === 0 ? (
            <p>No matching products found.</p>
          ) : (
            filteredProducts.map(product => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <p>
                  <div className="mb-2">
                    <h3>{product.title}</h3>
                  </div>
                </p>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
