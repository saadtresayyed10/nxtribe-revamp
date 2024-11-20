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
import { MobileMenu } from "./MobileNavbarMenu";

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
              <HoveredLink href="/about/founder">Founder</HoveredLink>
              <HoveredLink href="https://blog.nxtribe.com/">Blog</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="What We Offer">
            <div className="text-sm grid grid-cols-2 gap-10 p-10">
              <ProductItem
                title="IT & ITES"
                href="/whatweoffer/it"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Innovative tech solutions for seamless growth."
              />
              <ProductItem
                title="Training & Coaching"
                href="/whatweoffer/training"
                src="/whatwedo/coaching.jpg"
                description="Professional growth for individuals and teams."
              />
              <ProductItem
                title="Digital Marketing"
                href="/whatweoffer/digital-marketing"
                src="/whatwedo/digital.jpg"
                description="Innovative campaigns maximizing online brand reach."
              />
              <ProductItem
                title="HR & CHRO"
                href="/whatweoffer/hr"
                src="/whatwedo/hr&chro.jpg"
                description="Strategic HR solutions for workforce transformation."
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
        Making way for success
      </p>
    </Link>
  );
};

export const NavbarMobile = () => {
  return (
    <div className="lg:hidden flex justify-between items-center px-6 py-4 dark:bg-black bg-white">
      <div className="flex justify-center items-center gap-x-4">
        <MobileMenu />
        <Logo />
      </div>
      <ThemeToggle />
    </div>
  );
};
