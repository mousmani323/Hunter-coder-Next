import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="mainnav pt-6">
        <ul className="flex justify-center items-center">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/blogs">
            <li>Blogs</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
