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
          images: "https://img.ltwebstatic.com/images3_pi/2023/03/14/16787983382efabffc5746f826c1f012909dce06ff_thumbnail_358x.webp"
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
        },
        {
          id: 11,
          name: "Sweater",
          price: 39.99,
          description: "Stay warm and cozy with this sweater",
          images: "https://img.ltwebstatic.com/images3_pi/2022/10/09/16652948812715412a99f8f20022c1b196b078c797_thumbnail_358x.webp"
        },
        {
          id: 12,
          name: "Sneakers",
          price: 69.99,
          description: "Comfortable sneakers for your active lifestyle",
          images: "https://img.ltwebstatic.com/images3_pi/2022/08/04/165959500770cb5b10374698d0b1e80ac26a6e0f89_thumbnail_358x.webp"
        },
        {
          id: 13,
          name: "Handbag",
          price: 49.99,
          description: "A stylish handbag to carry your essentials",
          images: "https://img.ltwebstatic.com/images3_pi/2023/05/29/16853244384ba6466ad47c06e852ae1de6e0984110_thumbnail_358x.webp"
        },
        {
          id: 14,
          name: "Jacket",
          price: 79.99,
          description: "Stay stylish and protected from the elements",
          images: "https://img.ltwebstatic.com/images3_pi/2022/12/27/16721113992d093a130350f7645e0a630e1dd6c122_thumbnail_358x.webp"
        },
        {
          id: 15,
          name: "Gloves",
          price: 19.99,
          description: "Keep your hands warm and comfortable",
          images: "https://img.ltwebstatic.com/images3_spmp/2023/05/11/1683794418158a78338e1fe7885197dffdb917664f_thumbnail_358x.webp"
        },
        {
          id: 16,
          name: "Skirt",
          price: 34.99,
          description: "A versatile and fashionable skirt",
          images: "https://img.ltwebstatic.com/images3_pi/2023/05/02/16829913437c1c1ab4ff7fa1464f7906ef93cddceb_thumbnail_358x.webp"
        },
        {
          id: 17,
          name: "Polo Shirt",
          price: 24.99,
          description: "A classic polo shirt for a polished look",
          images: "https://img.ltwebstatic.com/images3_pi/2023/06/14/1686733335281da967138cb1575d65274c6843304a_thumbnail_358x.webp"
        },
        {
          id: 18,
          name: "Leggings",
          price: 29.99,
          description: "Stretchy leggings for workouts or casual wear",
          images: "https://img.ltwebstatic.com/images3_pi/2021/11/02/1635842782e5bf54019567c33b1367cfea0b5c5d28_thumbnail_358x.webp"
        },
        {
          id: 19,
          name: "Blouse",
          price: 39.99,
          description: "Elegant blouse for various occasions",
          images: "https://img.ltwebstatic.com/images3_pi/2021/07/12/1626058697fb85c6529e5ff74df928190d5aabeb65_thumbnail_358x.webp"
        },
        {
          id: 20,
          name: "Belt",
          price: 14.99,
          description: "Complete your outfit with this stylish belt",
          images: "https://img.ltwebstatic.com/images3_pi/2022/06/30/1656580752b6217a40b6814943cc62cfcc21455538_thumbnail_358x.webp"
        }
      ];
      const fresh = products.slice(0, 6);
      const mine = fresh.map(product => (
        <section key={product.id} className='bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:shadow-2xl'>
          <div className='h-40 relative'>
            <Image src={product.images} layout='fill' objectFit='contain' alt={product.name} />
          </div>
          <p className='mt-3 text-pink-500 font-semibold'>{product.name}</p>
          <p className='text-gray-600'>Price: ${product.price}</p>
        </section>
      ));
    
      return (
        <div className='w-[90%] mx-auto bg-white rounded-t-lg'>
          <div className='flex justify-between p-3 rounded-t-lg bg-pink-300 bottom-0'>
            <h2 className='text-lg font-semibold'>Fashion Deals</h2>
            <Link href='/deals'>
              <h2 className='text-lg font-semibold'>See All</h2>
            </Link>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 my-6'>
            {mine}
          </div>
        </div>
      );
    };
    
    
    
    
