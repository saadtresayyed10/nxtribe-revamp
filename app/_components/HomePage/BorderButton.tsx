"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

interface BorderButtonProps {
  buttonName: string;
}

export function BorderButton({ buttonName }: BorderButtonProps) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="font-circular text-sm dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 font"
      >
        <Link href="/contact">
          <span>{buttonName}</span>
        </Link>
      </HoverBorderGradient>
    </div>
  );
}
