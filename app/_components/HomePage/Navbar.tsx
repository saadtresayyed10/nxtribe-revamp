"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BorderButton } from "./BorderButton";
import { ThemeToggle } from "../ThemeToggle";

export function NavbarLG() {
  return (
    <div className="relative w-full lg:flex hidden items-center justify-between px-6 py-2.5 bg-white dark:bg-black">
      <div className="flex justify-center items-center text-center flex-col gap-y-8">
        <Logo />
      </div>
      <Navbar className="z-50" />
      <div className="flex justify-center items-center gap-x-6">
        <ThemeToggle />
        <BorderButton buttonName="Contact" />
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("font-circular", className)}>
      <Menu setActive={setActive}>
        <div className="flex justify-center items-center gap-x-10">
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm p-6">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="What We Offer">
            <div className="text-sm grid grid-cols-2 gap-10 p-10">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Workshop">
            <div className="flex flex-col space-y-4 text-sm p-6">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
          <Link href="/media">Media</Link>
        </div>
      </Menu>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-unbounded text-black dark:text-white font-medium text-2xl cursor-none">
        n
        <span className="ml-0.5 text-4xl font-bold text-white dark:text-black font-outline-2 font-circular hover:text-purple-500 hover:dark:text-purple-700 duration-300">
          X
        </span>
        tribe
      </h1>
      <p className="font-circular text-black dark:text-white font-semibold text-xs uppercase">
        Making way of success
      </p>
    </Link>
  );
};
