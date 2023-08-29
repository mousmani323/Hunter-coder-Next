import Link from "next/link";
import Image from "next/image";
import React from "react";

const App = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <div className="flex flex-col">
        <div className="relative flex place-items-center flex-col mt-10">
          <h1 className="lg:text-6xl sm:text-4xl">Hunter Coder</h1>
          <p className="lg:text-2xl sm:text-lg">A blog for Code Hunters</p>
          <div className="mt-5">
            <Image
              className="rounded-xl lg:w-80 sm:w-48 lg:h-72 sm:h-36"
              src="/homeimg.jpg"
              alt="hunting coder"
              width={320} // Set the desired width for the image
              height={280} // Set the desired height for the image
            />
          </div>
        </div>

        <h2 className="m-10 lg:text-4xl sm:text-xl text-center">
          Popular Blogs
        </h2>
        <hr />
        <div className="flex flex-wrap justify-center items-center mt-6 text-start">
          {/* First Link */}
          <div className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href="/blogs">
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
          <div className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href="/blogs">
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
          <div className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href="/blogs">
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
          <div className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href="/blogs">
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
          <div className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href="/blogs">
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
          <div className="group rounded-lg border border-transparent lg:px-5 sm:px-2 lg:py-4 sm:py-2 m-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href="/blogs">
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
      </div>
    </main>
  );
};

export default App;
