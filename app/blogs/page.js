import React from "react";
import Link from "next/link";

const Blogs = async () => {

  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();

  return (
    <>
      <h2 className=" lg:m-10 sm:m-6 lg:text-4xl sm:text-xl text-center">All Blogs</h2>
      <hr />
      {data?.map((blogItem) => {
          return (
            <div
              key={blogItem.slug}
              className="flex justify-center mx-4 lg:mt-10 sm:mt-4 lg:mb-0 lg:grid-cols-2 text-left"
            >
              <Link href={`/blogpost/${blogItem.slug}`}>
                <div className="group rounded-lg border border-transparent lg:px-5 sm:px-3 lg:py-4 sm:py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                  <h2 className="mb-2 lg:text-2xl sm:text-lg font-semibold">
                    {blogItem.title}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="text-start max-w-[40ch] text-sm opacity-50">
                    Find in-depth information about {blogItem.type}
                  </p>
                  <p>{blogItem.content.substr(0, 120)}...</p>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};



export default Blogs;
