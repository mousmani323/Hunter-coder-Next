import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mainnav pt-12">
      <ul className="flex justify-center items-center space-x-1">
        <Link href="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link href="/blogs">
          <li className="nav-item">Blogs</li>
        </Link>
        <Link href="/about">
          <li className="nav-item">About</li>
        </Link>
        <Link href="/contact">
          <li className="nav-item">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
