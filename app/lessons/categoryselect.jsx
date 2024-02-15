"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { useDebounce } from "use-debounce";
import { SlidersHorizontal } from "lucide-react";

function CategorySelect({ categories }) {
  const [selection, setSelection] = useState(new Set([""]));
  const router = useRouter();
  const pathname = usePathname();

  const selectedValue = useMemo(
    () => Array.from(selection).join(", ").replaceAll("_", " "),
    [selection]
  );

  const [query] = useDebounce(selectedValue, 500);

  useEffect(() => {
    if (!query || selection === "") {
      router.push(pathname);
    } else {
      router.push(`${pathname}?category=${query}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, router]);

  return (
    <Dropdown>
      <DropdownTrigger className="my-2 sm:my-0">
        <Button
          variant="shadow"
          // className="capitalize bg-pink-500 text-white"
          color="primary"
          startContent={<SlidersHorizontal />}
          isIconOnly
        ></Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="solid"
        color="primary"
        closeOnSelect={false}
        // disallowEmptySelection
        selectionMode="single"
        selectedKeys={selection}
        onSelectionChange={setSelection}
      >
        {categories.map((category) => (
          <DropdownItem key={category.attributes.name}>
            {category.attributes.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default CategorySelect;
