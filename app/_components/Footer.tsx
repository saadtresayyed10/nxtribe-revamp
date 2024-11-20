"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandX,
  IconHome,
  IconPhoneCall,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function Footer() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/nxt.tribe/",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.youtube.com/@nXtribe",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/nxtribe-making-way-for-%E2%80%9Csuccess%E2%80%9D-706921337/",
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
      href: "tel:+919112814584",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/NxtTribe",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/919112814584",
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
