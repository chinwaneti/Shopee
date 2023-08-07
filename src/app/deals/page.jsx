import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Bulk() {
    const products = [
        {
          id: 1,
          name: "Beach Wear",
          price: 39.99,
          description: "Perfect for a day at the beach",
          images: "https://img.ltwebstatic.com/images3_pi/2023/04/20/1681954378834c92a85d9f37f052288764cdb0bd6e_thumbnail_358x.webp"
        },
        {
          id: 2,
          name: "Trouser",
          price: 49.99,
          description: "A comfortable and stylish trouser",
          images: "https://img.ltwebstatic.com/images3_pi/2023/07/14/16893016313395416559562144bc360aba64628e96_thumbnail_297x.webp"
        },
        {
          id: 3,
          name: "Shoe",
          price: 79.99,
          description: "Classic shoes for any occasion",
          images: "https://img.ltwebstatic.com/images3_pi/2022/12/13/1670896707bc69f83d00598eea14e7dbe643415216_thumbnail_358x.webp"
        },
        {
          id: 4,
          name: "Backpack",
          price: 29.99,
          description: "A versatile and spacious backpack",
          images: "https://img.ltwebstatic.com/images3_pi/2022/03/21/1647832433207627aea7fdc28acbdb61b41841d61f_thumbnail_358x.webp"
        },
        {
          id: 5,
          name: "Watch",
          price: 89.99,
          description: "Elegant and functional wristwatch",
          images: "https://img.ltwebstatic.com/images3_spmp/2023/05/07/16834676071589116f4f162f99807fb7e158deedac_thumbnail_358x.webp"
        },
        {
          id: 6,
          name: "Sunglasses",
          price: 19.99,
          description: "Stay stylish while protecting your eyes",
          images: "https://img.ltwebstatic.com/images3_spmp/2023/06/12/1686554741e389015c2765ef89afdf1b3a0c196f3e_thumbnail_358x.webp"
        },
        {
          id: 7,
          name: "Dress",
          price: 59.99,
          description: "A beautiful dress for special occasions",
          images: "https://img.ltwebstatic.com/images3_pi/2022/02/07/1644202316dde214ed032372e2506b791072c5482b_thumbnail_358x.webp"
        },
        {
          id: 8,
          name: "T-shirt",
          price: 14.99,
          description: "A comfortable and casual t-shirt",
          images: "https://img.ltwebstatic.com/images3_pi/2022/09/17/1663393145badcc237e93ba692ada9d8456bf10860_thumbnail_358x.webp"
        },
        {
          id: 9,
          name: "Hat",
          price: 24.99,
          description: "Stay cool and shaded with this hat",
          images: "https://img.ltwebstatic.com/images3_spmp/2023/04/23/1682256555f5a5a10fdc460dc82bd91da8af6a5369_thumbnail_358x.webp"
        },
        {
          id: 10,
          name: "Jeans",
          price: 54.99,
          description: "Durable jeans for everyday wear",
          images: "https://img.ltwebstatic.com/images3_pi/2022/10/28/16669418635c742230ee353533363b96094804f513_thumbnail_358x.webp"
        }];
       
    const fresh = products.map((product =>(
        <section key={product.id} className='rounded-lg  p-10 '>
        <Image src={product.images} alt='freshh' width={150} height={150} className=''></Image>
        <div className=''>
        <div className='py-1'>{product.name}</div>
        <div>$ {product.price}</div></div>
        </section>
    )))      
  return (
    <div className='w-full   bg-pink-50 pt-20'>
    <div className='text-center font-bold py-10 text-3xl'>Deals Page</div>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[80%] mx-auto'>{fresh}</div>

    </div>
  )
}
