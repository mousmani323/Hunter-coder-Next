import React from "react";

const Slug = async ({ params }) => {

  function createMarkup(c){
    return {__html: c}
  }
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${params.slug}`
  );
  const data = await res.json();

  return (
    <>
      <div>
        <h2 className="m-10 lg:text-4xl sm:text-xl text-center">
          {data.blog.title}
        </h2>
        <hr />
        <p dangerouslySetInnerHTML={createMarkup(data.blog.content_html)} className="mt-4 lg:px-40 sm:px-20 lg:text-lg sm:text-sm"></p>
      </div>
    </>
  );
};

export default Slug;
