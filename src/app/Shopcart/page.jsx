"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiFillDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';

export default function Shopcart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const updateLocalStorage = (updatedCartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <AiOutlineShoppingCart size={48} className="text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">Your cart is empty</p>
           <Link href='/category'><button className="bg-pink-500 text-white py-2 px-4 rounded cursor-pointer">
              Continue Shopping
            </button></Link> 
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white p-6 rounded text-center">
                  <div className="w-24 h-24 mx-auto">
                    <Image src={item.image} alt={item.title} width={96} height={96} />
                  </div>
                  <p className="text-gray-800 font-semibold mb-2">{item.title}</p>
                  <p className="text-pink-500 text-lg">${item.price}</p>
                  <div className="flex items-center justify-center mt-4">
                    <button
                      className="bg-pink-500 text-white px-2 py-1 rounded-l"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="bg-pink-500 text-white px-2 py-1 rounded-r"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-500 mt-2"
                    onClick={() => removeItem(item.id)}
                  >
                    <AiFillDelete size={18} />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Total</h2>
              <p className="text-2xl text-pink-500">${calculateTotal().toFixed(2)}</p>
              <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
