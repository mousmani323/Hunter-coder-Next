import React from "react";
import Link from "next/link";
import Image from "next/image";

const formatDateString = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

const Blogs = async () => {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts"
  );
  const data = await res.json();

  return (
    <>
      <h2 className="lg:m-10 sm:m-6 lg:text-4xl sm:text-xl text-center">
        All Blogs
      </h2>
      <hr />
      {Array.isArray(data?.blogs) ? (
        data.blogs.map((blogItem) => {
          return (
            <div
              key={blogItem.id}
              className="flex justify-center mx-4 lg:mt-10 sm:mt-4 lg:mb-0 lg:grid-cols-2 text-left"
            >
              <div
                style={{ width: "60vw" }}
                className="group rounded-lg border border-transparent lg:px-5 sm:px-3 lg:py-4 sm:py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <Link href={`/blogpost/${blogItem.id}`}>
                  <div className="flex justify-between">
                    <div className="flex flex-row items-center">
                      <div className="pr-2">
                        <Image src="https://api.slingacademy.com/public/sample-blog-posts/1.png" className="rounded-full mb-2" width={50} height={50} alt="blog image"  />
                      </div>
                      <h2 className="mb-2 lg:text-2xl sm:text-lg font-semibold">
                        {blogItem.title}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                    </div>
                    <div>
                    <p className="text-sm text-gray-400">{formatDateString(blogItem.updated_at)}</p>
                    </div>
                  </div>
                </Link>
                <p className="text-start max-w-[40ch] text-sm opacity-50">
                  Find in-depth information about {blogItem.category}
                </p>
                <p>{blogItem.description.substr(0, 80)}...</p>
                <div
                  className="bg-gray-400 text-sm mt-2 rounded p-1"
                  style={{ display: "inline-block" }}
                >
                  {blogItem.category}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        // Handle the case when data is not in the expected format, e.g., display an error message
        <p>Error: Data format is not as expected</p>
      )}
    </>
  );
};

export default Blogs;
