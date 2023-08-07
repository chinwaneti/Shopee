import React from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Search from './Search';

export default function Navbar() {
  return (
    <div className="fixed w-full z-50 bg-white text-white">
      <nav className="flex items-center justify-between px-6 py-3">
        <div className="text-3xl font-bold">
          <Link href="/">
            <p className="text-pink-500 cursor-pointer">Shopee</p>
          </Link>
        </div>
        <Search />
        <div className="flex space-x-4">
          <Link href="/Shopcart">
            <FaShoppingCart size={24} className="text-pink-500 cursor-pointer hover:text-pink-600" />
          </Link>
          <Link href="/profile">
            <FaUser size={24} className="text-pink-500 cursor-pointer hover:text-pink-600" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
