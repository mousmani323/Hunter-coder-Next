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
      <h1 className="text-4xl text-center mb-8 font-bold">
        About Hunting Coder
      </h1>
      <h2 className="text-3xl my-4 font-semibold">Introduction</h2>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
        magnam aspernatur! Eveniet eligendi ipsam quos natus quod laudantium
        iure consectetur odit beatae consequuntur, molestiae suscipit nemo, qui
        vitae unde neque totam? Consequuntur possimus nemo ut labore natus,
        perferendis dolorem eos?
      </p>
      <h2 className="text-3xl my-4 font-semibold">Services offered</h2>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
        temporibus nobis itaque enim quam recusandae eius delectus tempore
        sapiente. Accusamus qui rem similique dicta nisi.
      </p>
      <ul className="text-lg mb-4">
        <li>service 1</li>
        <li>service 1</li>
        <li>service 1</li>
        <li>service 1</li>
      </ul>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
        temporibus nobis itaque enim 
      </p>
      <div>
        <Card
          className="my-3"
          color="dark"
          inverse
          style={{
            width: "36rem",
          }}
        >
          <CardHeader className="text-2xl font-semibold">Contact Us</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button
              className="my-2"
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
