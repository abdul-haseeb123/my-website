import NextImage from "next/image";
import ScienceBroS from "../public/chemistry-lab-animate.svg";
import { DisplayBlogs } from "./components/BlogCard";
import { Image } from "@nextui-org/react";

async function getFirstSix() {
  const res = await fetch(
    process.env.BACKEND_URL +
      "/api/blogs/?populate[0]=cover&fields[0]=title&fields[1]=slug&pagination[limit]=6"
  );
  return res.json();
}

function TypographyH1({ content }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-600 sm:text-left text-center">
      {content}
    </h1>
  );
}

function TypographyH2({ content }) {
  return (
    <h2 className="scroll-m-20 pb-2 sm:px-0 px-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0 text-foreground">
      {content}
    </h2>
  );
}
function TypographyH3({ children }) {
  return (
    <h3 className="scroll-m-20 sm:text-2xl text-xl font-semibold tracking-tight text-center sm:text-left px-3">
      {children}
    </h3>
  );
}

export default async function Home() {
  const data = await getFirstSix();
  const first_six = data.data;
  return (
    <main>
      <section className="sm:h-[calc(100vh-65px)]  bg-contain bg-no-repeat flex flex-col-reverse sm:flex-row-reverse justify-evenly items-center mr-6">
        <div className="sm:w-[50%] w-[calc(100vw-12px)] flex flex-col gap-5 mx-auto">
          <TypographyH1 content="Stay ahead of the curve in the ever-evolving field of chemistry." />
          <TypographyH3>
            &quot;Unlock the World of Elements: Where Chemistry Comes to Life -
            Lessons, Insights, and Discoveries Await&quot;
          </TypographyH3>
        </div>
        <div className="">
          <NextImage
            src={ScienceBroS}
            width={700}
            height={700}
            priority={100}
            quality={100}
          />
        </div>
      </section>

      <section className="flex flex-col gap-4 items-center py-7 after:content-[''] after:bg-pink-200   after:absolute relative after:inset-0 after:skew-y-3 after:-z-10 ">
        <TypographyH2 content={"Explore some Latest Blog Posts"} />
        <div
          id="blogs"
          className="grid place-content-center grid-cols-3 gap-4  w-fit"
        ></div>
        <DisplayBlogs blogs={first_six} />
      </section>
    </main>
  );
}
