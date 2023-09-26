"use client";
import Link from "next/link";
import React, { useState } from "react"
import Image from "next/image";

const Footer = () => {
  const [email, setemail] = useState("");
  const [open, setopen] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    const data = { email };
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      setemail("");
      setopen(true);
      setTimeout(() => {
        setopen(false);
      }, 3000);
    } else {
      console.error("Failed to submit form data");
    }
  };

  const isFormValid = email;

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setemail(e.target.value);
    }
  };

  const handleClose = () => {
    setopen(false);
  }

  return (
    <div>
      <footer>
        <div className="fixed z-50 right-3 top-3 lg:w-4/12 sm:w-3/5 ">
          { open && (
            <div className="notifications-container">
              <div className="success">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="succes-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="success-prompt-wrap">
                    <p className="success-prompt-heading">Feedback Submitted</p>
                    <div className="success-prompt-prompt">
                      <p>Thank you for contacting us</p>
                    </div>
                    <div className="success-button-container">
                      <button type="button" onClick={handleClose} className="success-button-main">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-gray-100 bg-zinc-800 rounded body-font mx-20 mt-14 mb-3">
          <div className=" px-5 py-5">
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-bold font-medium text-gray-100 tracking-widest text-xl mb-3">
                  Related Links
                </h2>
                <nav className="list-none space-y-2 mb-10">
                  <li>
                    <Link
                      href="/blogs"
                      className="text-gray-100 hover:text-gray-200"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-100 hover:text-gray-200"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-100 hover:text-gray-200"
                    >
                      Contact us
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-bold text-xl text-gray-100 tracking-widest  mb-3">
                  Social Links
                </h2>
                <nav className="list-none space-y-2 mb-10">
                  <li>
                    <Link
                      href="https://instagram.com/m_omarr_"
                      className="text-gray-200 hover:text-gray-300"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com/m_omarr_"
                      className="text-gray-200 hover:text-gray-300"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-200 hover:text-gray-300"
                    >
                      Tiktok
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-200 hover:text-gray-300"
                    >
                      Twitter
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-200 tracking-widest text-lg mb-3">
                  Susbscribe for updates
                </h2>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <input
                      id="exampleEmail"
                      name="email"
                      placeholder="write you email"
                      type="email"
                      value={email}
                      onChange={handleChange}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-gray-200 focus:border-gray-500 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button
                    disabled={!isFormValid}
                    onClick={handleClick}
                    className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded"
                  >
                    Join now
                  </button>
                </div>
                <p className="text-gray-300 text-sm mt-2 md:text-left text-center">
                  Don&apos;t miss out on the futuristic updates
                  <br className="lg:block hidden" />
                  related to coding
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className=" px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src="/android-chrome-192x192.png"
                alt="nav Image"
                width={25}
                height={20}
              />
              <span className="ml-3 text-xl">Hunter Coder</span>
            </div>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0">
              © 2020 HunterCoder —
              <a
                href="https://instagram.com/m_omarr_"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @mousmani323
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
