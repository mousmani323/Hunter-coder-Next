import React from "react";
import Link from "next/link";

const Blogs = async () => {

  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();

  return (
    <>
      <h2 className=" m-10 text-4xl text-center">All Blogs</h2>
      <hr />
      {data?.map((blogItem) => {
          return (
            <div
              key={blogItem.slug}
              className="flex justify-center mt-10 text-center lg:mb-0 lg:grid-cols-2 lg:text-left"
            >
              <Link href={`/blogpost/${blogItem.slug}`}>
                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                  <h2 className="mb-3 text-2xl font-semibold">
                    {blogItem.title}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="mt-2 text-start max-w-[30ch] text-sm opacity-50">
                    Find in-depth information about {blogItem.type}
                  </p>
                  <p>{blogItem.content.substr(0, 140)}...</p>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};



export default Blogs;
