import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function page() {
    const products2 = [{
        id: 11,
        name: "Sweater",
        price: 39.99,
        description: "Stay warm and cozy with this sweater",
        images: "https://img.ltwebstatic.com/images3_pi/2022/10/09/16652948812715412a99f8f20022c1b196b078c797_thumbnail_358x.webp",
        cart: "ADD TO CART"

      },
      {
        id: 12,
        name: "Sneakers",
        price: 69.99,
        description: "Comfortable sneakers for your active lifestyle",
        images: "https://img.ltwebstatic.com/images3_pi/2022/08/04/165959500770cb5b10374698d0b1e80ac26a6e0f89_thumbnail_358x.webp",
        cart: "ADD TO CART"

      },
      {
        id: 13,
        name: "Handbag",
        price: 49.99,
        description: "A stylish handbag to carry your essentials",
        images: "https://img.ltwebstatic.com/images3_pi/2023/05/29/16853244384ba6466ad47c06e852ae1de6e0984110_thumbnail_358x.webp",
        cart: "ADD TO CART"

      },
      {
        id: 14,
        name: "Jacket",
        price: 79.99,
        description: "Stay stylish and protected from the elements",
        images: "https://img.ltwebstatic.com/images3_pi/2022/12/27/16721113992d093a130350f7645e0a630e1dd6c122_thumbnail_358x.webp",
        cart: "ADD TO CART"

      },
      {
        id: 15,
        name: "Gloves",
        price: 19.99,
        description: "Keep your hands warm and comfortable",
        images: "https://img.ltwebstatic.com/images3_spmp/2023/05/11/1683794418158a78338e1fe7885197dffdb917664f_thumbnail_358x.webp",
        cart: "ADD TO CART"

      },
      {
        id: 16,
        name: "Skirt",
        price: 34.99,
        description: "A versatile and fashionable skirt",
        images: "https://img.ltwebstatic.com/images3_pi/2023/05/02/16829913437c1c1ab4ff7fa1464f7906ef93cddceb_thumbnail_358x.webp",
        cart: "ADD TO CART"

      },
      {
        id: 17,
        name: "Polo Shirt",
        price: 24.99,
        description: "A classic polo shirt for a polished look",
        images: "https://img.ltwebstatic.com/images3_pi/2023/06/14/1686733335281da967138cb1575d65274c6843304a_thumbnail_358x.webp",
        cart: "ADD TO CART"

      },
      {
        id: 18,
        name: "Leggings",
        price: 29.99,
        description: "Stretchy leggings for workouts or casual wear",
        images: "https://img.ltwebstatic.com/images3_pi/2021/11/02/1635842782e5bf54019567c33b1367cfea0b5c5d28_thumbnail_358x.webp",
        cart: "ADD TO CART"

      },
      {
        id: 19,
        name: "Blouse",
        price: 39.99,
        description: "Elegant blouse for various occasions",
        images: "https://img.ltwebstatic.com/images3_pi/2021/07/12/1626058697fb85c6529e5ff74df928190d5aabeb65_thumbnail_358x.webp",
        cart: "ADD TO CART"

      },
      {
        id: 20,
        name: "Belt",
        price: 14.99,
        description: "Complete your outfit with this stylish belt",
        images: "https://img.ltwebstatic.com/images3_pi/2022/06/30/1656580752b6217a40b6814943cc62cfcc21455538_thumbnail_358x.webp",
        cart: "ADD TO CART"
      }
    ];

    const farm = products2.map(products =>(
        <section key={products.id} className='bg-gray-200 w-full h-[50%] rounded-lg  '>
        <Image src={products.images} alt='pics' width={150} height={150} className='mx-auto mt-5'></Image>
        <div className='ml-14 mt-2'>$ {products.price}</div>
        <Link href='/Shopcart'><div className='w-full text-center bg-pink-200 p-2 my-2'> {products.cart}</div></Link>
        </section>
    ))
  return (
    <div className='w-full pt-20 container mx-auto py-10 bg-pink-50 '>
    <div className='text-center font-bold py-10 text-3xl'>Popular Items</div>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>{farm}</div>

    </div>
  )
}
