"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Bulk from './Bulk/page';

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from FakeStoreAPI
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const fresh = products.slice(0, 6);
  const mine = fresh.map(product => (
    <section key={product.id} className='bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:shadow-2xl'>
      <div className='h-40 relative'>
        <Image src={product.image} layout="fill" objectFit="contain" alt={product.title} />
      </div>
      <p className='mt-3 text-pink-500 font-semibold'>Price: ${product.price}</p>
    </section>
  ));

  const fresh1 = products.slice(6, 12);
  const mine1 = fresh1.map(product => (
    <section key={product.id} className='bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:shadow-2xl'>
      <div className='h-40 relative'>
        <Image src={product.image} layout="fill" objectFit="contain" alt={product.title} />
      </div>
      <p className='mt-3 text-pink-500 font-semibold'>Price: ${product.price}</p>
    </section>
  ));

  return (
    <div className="bg-gray-100 ">
      <div className='container mx-auto'>
        <div className='h-10'></div>
        <div className='bg-white flex items-center justify-between w-[90%] mx-[5%] border-t-2 rounded-lg my-10 p-8 shadow-lg'>
          <div className='w-[60%]'>
            <p className='text-4xl text-center font-semibold'>
              Grab Upto 50% Discount On Selected Items
            </p>
            <button className='mt-6 bg-pink-500 text-white py-3 px-8 rounded-lg hover:bg-pink-600 transition duration-300'>
              Buy Now
            </button>
          </div>
          <div className='w-[40%]'>
            <Image src='https://img.ltwebstatic.com/images3_pi/2023/06/25/1687683657248048461cb8ae0f670c454b05461750_thumbnail_600x.jpg' alt='pics' width={200} height={200}></Image>
          </div>
        </div>
        <div className='w-[90%] mx-auto bg-white rounded-lg p-4 shadow-lg'>
          <div className='flex items-center justify-between p-3 -z-50 bg-pink-300 rounded-t-lg'>
            <h2 className='text-lg font-semibold'>Categories</h2>
            <Link href='/category'>
              <h2 className='text-lg font-semibold'>See All</h2>
            </Link>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 my-6'>
            {mine}
          </div>
        </div>
        <div className='w-[90%] mx-auto bg-white rounded-lg p-4 shadow-lg mt-6'>
          <div className='flex items-center justify-between p-3 bg-pink-300 rounded-t-lg'>
            <h2 className='text-lg font-semibold'>Popular Items</h2>
            <Link href='/popular'>
              <h2 className='text-lg font-semibold'>See All</h2>
            </Link>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 my-6'>
            {mine1}
          </div>
        </div>
        <div className='mt-10'>
          <Bulk />
        </div>
      </div>
    </div>
  );
}
