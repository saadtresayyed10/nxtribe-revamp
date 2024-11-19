"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandX,
  IconHome,
  IconBrandFacebook,
  IconPhoneCall,
} from "@tabler/icons-react";

export function Footer() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Phone",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="lg:flex hidden items-center justify-center flex-col lg:gap-y-3 h-[12rem] w-full lg:mt-20">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
      <div className="flex justify-center items-center flex-col lg:gap-y-2 font-circular text-xs font-light text-muted-foreground">
        <h4>
          <span className="dark:text-purple-500 text-purple-700">
            Developer
          </span>
          : Saad Sayyed
        </h4>
        <h4>
          <span className="dark:text-purple-500 text-purple-700">Mail</span>:
          info@nxtribe.com
        </h4>
        {/* <h4>
          <span className="dark:text-purple-500 text-purple-700">
            Contact No
          </span>
          : (+91) 911-281-4584
        </h4> */}
        <h4>
          <span className="dark:text-purple-500 text-purple-700">Office</span>:
          Office No-1, Gagan Cefiro Commerical Bldg, Pisoli, Pune
        </h4>
      </div>
    </div>
  );
}
