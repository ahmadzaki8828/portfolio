"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export const LandingHero = () => {
  return (
    <div className="text-[#f07167] font-bold py-10 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Hi, Welcome to my Portfolio</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#fefae0] via-[#606c38] to-[#283618]"></div>
      </div>
      <div className="text-sm md:text-xl  text-[#f07167]">I am Ahmad</div>
      <div>
        <Link href={"/resume"}>
          <Button
            variant={"default"}
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Resume
          </Button>
        </Link>
      </div>
    </div>
  );
};
