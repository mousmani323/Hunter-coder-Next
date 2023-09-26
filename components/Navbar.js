import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="text-gray-600 bg-gray-200 body-font">
      <div className="mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="flex font-medium justify-center items-center text-gray-900 md:mb-0">
          <Image src="/android-chrome-192x192.png" width={20} height={20} />
          <span className="ml-3 text-xl">Hunter Coder</span>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/blogs" className="mr-5 hover:text-gray-900">
            Blogs
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About us
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
