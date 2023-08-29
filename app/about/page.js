"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardText,
  CardTitle,
  Button,
  CardHeader,
  CardBody,
} from "reactstrap";

const About = () => {
  const router = useRouter();
  return (
    <div className=" my-12 mx-auto max-w-2xl">
      <h1 className="lg:text-4xl sm:text-2xl text-center mb-8 font-bold">
        About Hunting Coder
      </h1>
      <h2 className="lg:text-3xl sm:text-xl sm:pl-4 my-4 font-semibold">Introduction</h2>
      <p className="lg:text-lg sm:text-sm sm:px-4 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
        magnam aspernatur! Eveniet eligendi ipsam quos natus quod laudantium
        iure consectetur odit beatae consequuntur, molestiae suscipit nemo, qui
        vitae unde neque totam? Consequuntur possimus nemo ut labore natus,
        perferendis dolorem eos?
      </p>
      <h2 className="lg:text-3xl sm:text-xl pl-4 my-4 font-semibold">Services offered</h2>
      <p className="lg:text-lg sm:text-sm sm:px-4 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
        temporibus nobis itaque enim quam recusandae eius delectus tempore
        sapiente. Accusamus qui rem similique dicta nisi.
      </p>
      <ul className="lg:text-lg sm:text-sm sm:px-4 mb-4">
        <li>service 1</li>
        <li>service 2</li>
        <li>service 3</li>
        <li>service 4</li>
      </ul>
      <p className="lg:text-lg sm:text-sm sm:px-4 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
        temporibus nobis itaque enim 
      </p>
      <div>
        <Card
          className="my-3 lg:max-w-xl sm:w-96 sm:mx-auto"
          color="dark"
          inverse
        >
          <CardHeader className="lg:text-2xl sm:text-lg font-semibold">Contact Us</CardHeader>
          <CardBody>
            <CardTitle className="lg:text-lg sm:text-md" tag="h5">Special Title Treatment</CardTitle>
            <CardText className="lg:text-lg sm:text-sm">
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button
              className="mt-3"
              color="primary"
              onClick={() => router.push("/contact")}
            >
              Contact us
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default About;
