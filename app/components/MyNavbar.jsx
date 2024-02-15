"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
} from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { cn } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Microscope } from "lucide-react";

const menuItems = [
  {
    title: "Lessons",
    href: "/lessons",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "MCQs",
    href: "/mcqs",
  },
  {
    title: "About Us",
    href: "/about",
  },
];

export default function MyNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent justify="center">
        <NavbarBrand as={NextLink} href={"/"}>
          <Microscope color="#38bdf8" size={40} />
          <p className="text-pink-500 font-bold text-2xl">College Chemistry</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive={pathname == "/"}>
          <Link
            className={pathname == "/" && "text-pink-500 font-bold"}
            href="/"
            color={!(pathname == "/") && "foreground"}
            as={NextLink}
            aria-current={pathname == "/" && "page"}
          >
            Home
          </Link>
        </NavbarItem>
        {menuItems.map((item) => (
          <NavbarItem
            key={item.title}
            isActive={pathname.startsWith(item.href)}
          >
            <Link
              className={
                pathname.startsWith(item.href) && "text-pink-500 font-bold"
              }
              href={item.href}
              color={!pathname.startsWith(item.href) && "foreground"}
              as={NextLink}
              aria-current={pathname.startsWith(item.href) && "page"}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}

        <ThemeSwitcher />
      </NavbarContent>
      <NavbarContent className="flex sm:hidden" justify="end">
        <ThemeSwitcher />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem isActive={pathname == "/"}>
          <Link
            className={cn("w-full", {
              "text-pink-500 font-bold": pathname == "/",
            })}
            href="/"
            color={!(pathname == "/") && "foreground"}
            as={NextLink}
            aria-current={pathname == "/" && "page"}
            size="lg"
          >
            Home
          </Link>
        </NavbarMenuItem>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.title}
            isActive={pathname.startsWith(item.href)}
          >
            <Link
              className={cn("w-full", {
                "text-pink-500 font-bold": pathname.startsWith(item.href),
              })}
              href={item.href}
              color={!pathname.startsWith(item.href) && "foreground"}
              as={NextLink}
              aria-current={pathname.startsWith(item.href) && "page"}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
