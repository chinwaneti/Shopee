"use client"
import { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailsPage({ params }) {
  const { slug } = params;
  const [details, setDetails] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isItemAdded, setIsItemAdded] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${slug}`);
        const data = await response.json();
        setDetails(data);

        const responseRelated = await fetch(`https://fakestoreapi.com/products/category/${data.category}`);
        const dataRelated = await responseRelated.json();
        setRelatedItems(dataRelated);
      } catch (error) {
      }
    };

    fetchDetails();
  }, [slug]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
    localStorage.setItem('cartItems', JSON.stringify([...cart, item]));

    setIsItemAdded(true);
    setTimeout(() => {
      setIsItemAdded(false);
    }, 2000); // Reset the message after 2 seconds
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/category">
            <div className="cursor-pointer">
              <BsArrowLeft size={30} />
            </div>
          </Link>
          <h1 className="text-2xl font-semibold">Product Details</h1>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 mb-12">
          {/* Your product details rendering */}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-6">Related Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedItems.map(item => (
              <div key={item.id} className="bg-white p-6 rounded text-center">
                <div className="w-24 h-24 mx-auto">
                  <Image src={item.image} alt={item.title} width={96} height={96} />
                </div>
                <p className="text-gray-800 font-semibold mb-2">{item.title}</p>
                <button
                  className="bg-pink-500 text-white py-2 px-4 rounded cursor-pointer"
                  onClick={() => addToCart(item)} 
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
        {isItemAdded && (
          <div className="mt-4 text-green-600">Item added</div>
        )}
      </div>
    </div>
  );
}
