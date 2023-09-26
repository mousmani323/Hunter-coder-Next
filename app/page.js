import Link from "next/link";
import Image from "next/image";
import React from "react";

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

const App = async () => {

  const res = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=15&limit=3");
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <div className="flex flex-col">
        <div className="relative flex place-items-center flex-col mt-10">
          <h1 className="lg:text-4xl sm:text-2xl">Hunter Coder</h1>
          <p className="lg:text-lg sm:text-md">A blog for Code Hunters</p>
          <div className="mt-5">
            <Image
              className="rounded-xl object-cover lg:w-64 sm:w-48 lg:h-52 sm:h-36"
              src="/homeimg.jpg"
              alt="hunting coder"
              width={140} 
              height={100} 
            />
          </div>
        </div>

        <h2 className="m-10 lg:text-xl sm:text-lg text-center">
          Popular Blogs
        </h2>
        <hr />
        <div className="flex flex-wrap justify-center items-center mt-6 text-start">
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
                        <Image src={`https://api.slingacademy.com/public/sample-blog-posts/${blogItem.id}.png`} className="rounded-full mb-2" width={50} height={50} alt="blog image"  />
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
                  className="bg-gray-400 text-sm mt-2 rounded-xl p-1"
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
        </div>
      </div>
    </main>
  );
};

export default App;
