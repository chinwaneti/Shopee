import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



export default function Footer() {
   const fair = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-2xl flex-1 font-bold mb-4 md:mb-0">
        Shopee
        <div className='font-normal text-sm'>&copy;{fair}</div>
          </div>
          
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12">
        <Link href='#'><p className="hover:text-pink-500 transition duration-300 cursor-pointer">Home</p></Link>
          <Link href='#'><p className="hover:text-pink-500 transition duration-300 cursor-pointer">Shop</p></Link>
          <Link href='category'> <p className="hover:text-pink-500 transition duration-300 cursor-pointer">Categories</p></Link>
          <Link href='deals'><p className="hover:text-pink-500 transition duration-300 cursor-pointer">Deals</p></Link>
          <Link href='#'> <p className="hover:text-pink-500 transition duration-300 cursor-pointer">Contact</p></Link>
        </nav>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <Link href='#'><FaFacebook className="text-xl hover:text-pink-500 transition duration-300 cursor-pointer" /></Link>
          <Link href='#'><FaTwitter className="text-xl hover:text-pink-500 transition duration-300 cursor-pointer" /></Link>
          <Link href='#'><FaInstagram className="text-xl hover:text-pink-500 transition duration-300 cursor-pointer" /></Link>
        </div>
      </div>
    </footer>
  );
}
