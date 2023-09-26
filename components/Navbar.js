import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="text-gray-600 bg-gray-200 body-font">
      <div className="mx-auto flex flex-wrap p-3 flex-col md:flex-row justify-between items-center">
        <div className="flex font-medium justify-between text-gray-900 md:mb-0">
          <Image src="/android-chrome-192x192.png" width={25} height={20} />
          <span className="ml-3 text-2xl">Hunter Coder</span>
        </div>
        <nav className=" flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 font-bold hover:text-gray-900">
            Home
          </Link>
          <Link href="/blogs" className="mr-5 font-bold hover:text-gray-900">
            Blogs
          </Link>
          <Link href="/about" className="mr-5 font-bold hover:text-gray-900">
            About us
          </Link>
          <Link href="/contact" className="mr-5 font-bold hover:text-gray-900">
            Contact us
          </Link>
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;
