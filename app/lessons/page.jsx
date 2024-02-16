import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import NextImage from "next/image";
import CategorySelect from "./categoryselect";
import NextLink from "next/link";
import MyPagination from "./pagination";

export const metadata = {
  title: "Lessons",
};

async function getLessons() {
  const res = await fetch(
    process.env.BACKEND_URL +
      `/api/lessons?populate=*&fields[0]=title&fields[1]=slug&fields[2]=description`
  );
  return res.json();
}

async function getCategories() {
  const res = await fetch(process.env.BACKEND_URL + "/api/categories");
  return res.json();
}

function CardComponent({ lesson }) {
  return (
    <Card
      className="max-w-[300px] group hover:shadow-lg transition duration-300 ease-in-out rounded-lg overflow-hidden shadow-lg "
      radius="none"
      as={NextLink}
      href={"/lessons/" + lesson.attributes.slug}
    >
      <CardHeader className="p-0">
        <img
          src={lesson.attributes.cover.data.attributes.url}
          // as={NextImage}
          alt={lesson.attributes.title}
          className="w-[300px] h-[220px] object-cover rounded-none"
          width={lesson.attributes.cover.data.attributes.width}
          height={lesson.attributes.cover.data.attributes.height}
        />
      </CardHeader>
      <CardBody className="">
        <h1 className="text-2xl font-bold group-hover:text-pink-600">
          {lesson.attributes.title}
        </h1>
        <p className="pt-1 text-sm line-clamp-3 ">
          {lesson.attributes.description}
        </p>
      </CardBody>
      <CardFooter className="gap-2 flex flex-row flex-wrap pt-0">
        {lesson.attributes.categories.data.map((category) => (
          <Chip
            key={category.attributes.name}
            size="sm"
            variant="solid"
            color="primary"
            style={{
              color: "white",
            }}
          >
            # {category.attributes.name}
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
}

export default async function lessons() {
  // const category = searchParams["category"] ?? "";
  // const limit = searchParams["limit"] || 2;
  const data = await getLessons();
  const lessons = data.data;

  // const categories = await getCategories();
  return (
    <main className="container mx-auto grid p-5 justify-center min-h-[90vh]">
      <div className="w-fit md:ml-auto md:mr-0 ml-auto mr-auto">
        {/* <CategorySelect categories={categories.data} /> */}
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 place-content-center">
        {lessons.map((lesson) => (
          <CardComponent lesson={lesson} key={lesson.attributes.slug} />
        ))}
      </section>
      {/* <MyPagination total={data.meta.pagination.total} /> */}
    </main>
  );
}
