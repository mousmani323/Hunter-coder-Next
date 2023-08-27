import React from "react";

const Slug = async ({ params }) => {

    const res = await fetch(`http://localhost:3000/api/getblogs?slug=${params.slug}`)
    const data = await res.json();
 
    return (
    <>
      <div>
        <h2 className="m-10 text-4xl text-center">{data && data.title} </h2>
        <p  className="px-20" >{data && data.content}</p>
      </div>
    </>
  );
};

export default Slug;
