import React from "react";
import { Link, Image } from "@nextui-org/react";
import NextLink from "next/link";

import NextImage from "next/image";

function Footer() {
  return (
    <footer className="bg-pink-50 dark:bg-orange-50 dark:border-t-medium dark:border-pink-400 mt-12">
      <div className="container mx-auto p-3 flex flex-wrap justify-evenly gap-2 relative items-center">
        <Image
          src={"/college-chemistry.png"}
          width={210}
          height={210}
          alt="College Chemistry"
          className="w-full object-cover"
          as={NextImage}
        />
        <div className="flex flex-wrap gap-6 ">
          <Link size="lg" href="/lessons" color="primary">
            Lessons
          </Link>

          <Link size="lg" href="/blogs" color="primary">
            Blogs
          </Link>

          <Link size="lg" href="/mcqs" color="primary">
            MCQs
          </Link>
        </div>
      </div>
    </footer>
  );
}

function Footer2() {
  return (
    <footer className="bg-[#7f27ff] rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NextLink
            href="/"
            className="flex items-center mb-4 sm:mb-0  space-x-3 rtl:space-x-reverse"
          >
            <NextImage
              src={"/2.png"}
              className="h-24"
              width={100}
              height={100}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
              College Chemistry
            </span>
          </NextLink>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <NextLink
                href="/about"
                className="hover:underline me-4 md:me-6 text-white"
              >
                About
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/mcqs"
                className="hover:underline me-4 md:me-6 text-white"
              >
                MCQs
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/lessons"
                className="hover:underline me-4 md:me-6 text-white"
              >
                Lessons
              </NextLink>
            </li>
            <li>
              <NextLink href="/blogs" className="hover:underline text-white">
                Blogs
              </NextLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2023{" "}
          <NextLink href="/" className="hover:underline text-white">
            College Chemistry™
          </NextLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer2;
