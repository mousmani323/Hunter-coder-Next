"use client";

import Link from "next/link";
import React from "react";

const App = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <div className="flex flex-col">
        <div className="relative flex place-items-center flex-col mt-10">
          <h1 className="lg:text-6xl sm:text-4xl">Hunter Coder</h1>
          <p className="lg:text-2xl sm:text-lg">A blog for Code Hunters</p>
          <div className="mt-5">
            <img
              className="rounded-xl lg:w-80 sm:w-48 lg:h-72 sm:h-36"
              src="/homeimg.jpg"
              alt="hunting coder"
            />
          </div>
        </div>

        <h2 className="m-10 lg:text-4xl sm:text-xl text-center">Popular Blogs</h2>
        <hr />
        <div className="flex lg:flex-row sm:flex-col sm:justify-center sm:items-center mt-6 text-start lg:mb-0 lg:grid-cols-2 lg:text-left">
          <Link
            href="/blogs"
            className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-1 text-2xl sm:text-lg font-semibold">
              The best way to learn Javascript in 2022{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="mt-2 text-start max-w-[40ch] text-sm sm:text-xs opacity-50">
              Find in-depth information about Javascript
            </p>
          </Link>
          <Link
            href="/blogs"
            className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-1 text-2xl sm:text-lg font-semibold">
              The best way to learn Javascript in 2022{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="mt-2 text-start max-w-[40ch] text-sm sm:text-xs opacity-50">
              Find in-depth information about Javascript
            </p>
          </Link>
          <Link
            href="/blogs"
            className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-1 text-2xl sm:text-lg font-semibold">
              The best way to learn Javascript in 2022{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="mt-2 text-start max-w-[40ch] text-sm sm:text-xs opacity-50">
              Find in-depth information about Javascript
            </p>
          </Link>
          <Link
            href="/blogs"
            className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-1 text-2xl sm:text-lg font-semibold">
              The best way to learn Javascript in 2022{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="mt-2 text-start max-w-[40ch] text-sm sm:text-xs opacity-50">
              Find in-depth information about Javascript
            </p>
          </Link>
        
        </div>
      </div>
    </main>
  );
};
export default App;
