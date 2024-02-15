"use client";

import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NextImage from "next/image";
import NextLink from "next/link";

import { cn } from "@nextui-org/react";
import { useEffect } from "react";
import { useState } from "react";

export default function BlogCard({ blog, className = "" }) {
  return (
    <Card
      className={cn(
        "   max-w-[300px]  hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out",
        className
      )}
      shadow="sm"
      radius="sm"
      as={NextLink}
      href={"/blogs/" + blog.attributes.slug}
    >
      <CardHeader className="p-0 flex-col items-start">
        {/* <small className="text-default-500">{blog.published_at}</small> */}
        <Image
          alt="Card background"
          className="w-[300px] h-[220px] object-cover rounded-small"
          src={
            "http://localhost:1337" +
            blog.attributes.cover.data.attributes.formats.small.url
          }
          width={blog.attributes.cover.data.attributes.formats.small.width}
          height={blog.attributes.cover.data.attributes.formats.small.height}
          as={NextImage}
        />
      </CardHeader>
      <CardBody className="overflow-visible  flex flex-col gap-4 ">
        <h4 className="font-bold text-large">{blog.attributes.title}</h4>
      </CardBody>
    </Card>
  );
}

export function DisplayBlogs({ blogs, className = "" }) {
  const [blogsToShow, setBlogsToShow] = useState(3);
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const updateCardsPerRow = () => {
      const width = window.innerWidth;
      let updateCardsPerRow = 1;
      if (width < 640) {
        updateCardsPerRow = 1;
      } else if (width < 768) {
        updateCardsPerRow = 2;
      } else {
        updateCardsPerRow = 3;
      }

      setBlogsToShow(updateCardsPerRow);
    };

    // Update cards per row when the window is resized
    window.addEventListener("resize", updateCardsPerRow);

    // Initial update
    updateCardsPerRow();

    return () => {
      window.removeEventListener("resize", updateCardsPerRow);
    };
  }, []);

  const handleNext = () => {
    if (currIndex + blogsToShow < blogs.length) {
      setCurrIndex(currIndex + blogsToShow);
    }
  };

  const handlePrev = () => {
    if (currIndex - blogsToShow >= 0) {
      setCurrIndex(currIndex - blogsToShow);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={handlePrev}
        isDisabled={currIndex == 0}
        className="bg-pink-500"
        isIconOnly
        radius="full"
      >
        <ArrowLeft color="#ffffff" />
      </Button>
      <div className="flex gap-4">
        {blogs.slice(currIndex, currIndex + blogsToShow).map((blog) => (
          <BlogCard
            blog={blog}
            key={blog.attributes.title + blog.attributes.description}
          />
        ))}
      </div>
      <Button
        onClick={handleNext}
        className="bg-pink-500"
        isIconOnly
        radius="full"
        isDisabled={currIndex + blogsToShow >= blogs.length}
      >
        <ArrowRight color="#ffffff" />
      </Button>
    </div>
  );
}
