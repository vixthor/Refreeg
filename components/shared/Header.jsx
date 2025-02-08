"use client";

import { navLinks, socialLinks } from "../../constants";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (route) => {
    const targetHash = `#${route}`;
    if (pathname === "/") {
      // If already on the homepage, scroll to the section
      document
        .querySelector(targetHash)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the homepage and scroll to the section
      router.push(`/${route === "home" ? "" : targetHash}`);
    }
  };

  return (
    <header className="sticky top-0 w-full px-[10px] md:px-[50px] py-[5px] flex justify-between items-center backdrop-blur-md z-50">
      <Link href="/">
        <Image
          className="md:w-[80px] w-[65px] md:h-[60px] h-[50px]"
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <nav className="space-x-[40px] hidden items-center md:flex">
        {navLinks.map((nav) => (
          <button
            key={nav.route}
            onClick={() => handleNavigation(nav.route)}
            className="text-baseline-1"
          >
            {nav.label}
          </button>
        ))}
        <Link href="/christmasdrive">Ramadan drive</Link>
        <Link href="/petitions">Petitions</Link>
        <Link href={socialLinks.community}>
          <button className="flex gap-[6px] bg-[#036] py-[10px] px-[15px] rounded-[8px] text-white text-[15px] items-center justify-center font-semibold">
            Our Community
            <ArrowRight size="18" />
          </button>
        </Link>
      </nav>

      <nav className="md:hidden">
        <Menu onClick={onOpen} className="size-[40px]" />
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              className="flex justify-between items-center"
            >
              <p>Menu</p>
              <X onClick={onClose} />
            </DrawerHeader>
            <DrawerBody className="flex flex-col bg-white space-y-4 text-center">
              {navLinks.map((nav) => (
                <button
                  key={nav.route}
                  onClick={() => {
                    handleNavigation(nav.route);
                    onClose();
                  }}
                  className="py-2 px-4 text-lg font-medium border-none outline-none text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {nav.label}
                </button>
              ))}
              <Link
                href="/christmasdrive"
                onClick={onClose}
                className="py-2 px-4 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Ramadan drive
              </Link>
              <Link
                href="/petitions"
                onClick={onClose}
                className="py-2 px-4 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Petitions
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;
