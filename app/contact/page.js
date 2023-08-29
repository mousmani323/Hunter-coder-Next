"use client";
import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  UncontrolledAlert,
} from "reactstrap";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");
  const [open, setopen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, phone, email, desc };

    const response = await fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setname("");
      setdesc("");
      setemail("");
      setphone("");
      setopen(true);
      setTimeout(() => {
        setopen(false);
      }, 3000);
    } else {
      console.error("Failed to submit form data");
    }
  };
  const isFormValid = name && email && phone && desc;

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };

  return (
    <div>
      <div className="fixed z-50 right-3 lg:w-1/5 sm:w-3/5 ">
        {open && (
          <UncontrolledAlert className="h-20" color="success">
            Thank you for contacting us
          </UncontrolledAlert>
        )}
      </div>
      <h1 className="lg:text-4xl sm:text-xl text-center mt-16 font-bold">
        You're feedback is valuable to us
      </h1>
      <div className="flex justify-center my-10">
        <Form
          onSubmit={handleSubmit}
          className="group rounded-lg border border-transparent lg:px-5 sm:px-0 py-4 "
        >
          <div className="flex items-center justify-center lg:mb-16 sm:mb-8 mt-2">
            <h1 className="lg:text-4xl sm:text-2xl font-semibold">
              Contact Us
            </h1>
          </div>
          <FormGroup row className="px-4">
            <Label for="name" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                id="name"
                name="name"
                placeholder="write your name"
                type="text"
                className="lg:ml-3"
                value={name}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="px-4">
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="write you email"
                type="email"
                className="lg:ml-3"
                value={email}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="px-4">
            <Label for="examplePassword" sm={2}>
              Phone number
            </Label>
            <Col sm={10}>
              <Input
                id="examplePassword"
                name="phone"
                placeholder="write your phone number"
                type="number"
                className="lg:ml-3"
                value={phone}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row className="px-4">
            <Label for="exampleText" sm={2}>
              Your Feedback
            </Label>
            <Col sm={10}>
              <Input
                id="exampleText"
                name="desc"
                type="textarea"
                className="lg:ml-3"
                value={desc}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 10,
              }}
            >
              <Button disabled={!isFormValid} color="primary">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
