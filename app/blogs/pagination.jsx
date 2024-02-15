"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { useDebounce } from "use-debounce";

export default function MyPagination({ total }) {
  const [limit, setLimit] = useState(2);

  const router = useRouter();
  const pathname = usePathname();

  const [query] = useDebounce(limit, 500);

  useEffect(() => {
    if (!query || limit === 2) {
      router.push(pathname);
    } else {
      router.push(`${pathname}?limit=${query}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, router]);

  const handleClick = () => {
    if (limit >= total) {
      return;
    }
    setLimit((prev) => prev + 2);
  };
  return (
    <div className="container mx-auto flex justify-center py-5">
      <Button
        color="primary"
        onClick={handleClick}
        className={limit >= total && "hidden" + " dark:text-white"}
      >
        Load More
      </Button>
    </div>
  );
}
