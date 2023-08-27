"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const App = () => {
 
  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <div className="flex flex-col">
        <div className="relative flex place-items-center flex-col mt-10">
          <h1 className="text-6xl ">Hunter Coder</h1>
          <p className="text-2xl">A blog for Code Hunters</p>
          <div className="mt-5">
            <Image
              className="rounded-xl"
              src="/homeimg.jpg"
              width={300}
              height={300}
            />
          </div>
        </div>

        <h2 className=" m-10 text-4xl text-center">Popular Blogs</h2>
        <hr />
        <div className="flex flex-row mt-10 text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
          <Link
            href="/blogs"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              The best way to learn Javascript in 2022{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="mt-2 text-start max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Javascript
            </p>
          </Link>

          <Link
            href="/blogs"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              The best way to learn Javascript in 2022{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-start text-sm opacity-50">
              Find in-depth information about Javascript
            </p>
          </Link>

          <Link
            href="/blogs"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              The best way to learn Javascript in 2022{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0  text-start max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Javascript
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default App;
