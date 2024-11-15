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
import { motion } from "framer-motion";

export function NavbarLG() {
  return (
    <div className="relative w-full lg:flex hidden items-center justify-between px-6 py-2.5 bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        className="flex justify-center items-center text-center flex-col gap-y-8"
      >
        <Logo />
      </motion.div>
      <Navbar className="z-50" />
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        className="flex justify-center items-center gap-x-4"
      >
        <ThemeToggle />
        <BorderButton buttonName="Contact" />
      </motion.div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
      className={cn("font-circular", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-center items-center gap-x-10">
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm p-6">
              <HoveredLink href="/about/our-purpose">Our Purpose</HoveredLink>
              <HoveredLink href="/about/why-us">Why Us?</HoveredLink>
              <HoveredLink href="/about/blog">Blog</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="What We Offer">
            <div className="text-sm grid grid-cols-2 gap-10 p-10">
              <ProductItem
                title="HR & CHRO"
                href="/whatweoffer/hr"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Strategic HR solutions for workforce transformation."
              />
              <ProductItem
                title="Training & Coaching"
                href="/whatweoffer/training"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Professional growth for individuals and teams."
              />
              <ProductItem
                title="Digital Marketing"
                href="/whatweoffer/digital-marketing"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Innovative campaigns maximizing online brand reach."
              />
              <ProductItem
                title="Employee Wellness"
                href="/whatweoffer/employee-wellness"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Holistic programs enhancing employee health, productivity."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Workshop">
            <div className="flex flex-col space-y-4 text-sm p-6">
              <HoveredLink href="/workshop/talent">
                Talent Acquisition
              </HoveredLink>
              <HoveredLink href="/workshop/recruitment">
                Recruitment
              </HoveredLink>
              <HoveredLink href="/workshop/organizations">
                Organizations & Development
              </HoveredLink>
            </div>
          </MenuItem>
          <Link href="/media">Media</Link>
        </div>
      </Menu>
    </motion.div>
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
