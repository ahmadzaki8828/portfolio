"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageSlider } from "./image-slider";
import Link from "next/link";

const IMAGES = [
  { url: "./athena-1.png", alt: "Image not Found" },
  { url: "./athena-2.png", alt: "Image not Found" },
  { url: "./athena-3.png", alt: "Image not Found" },
  { url: "./athena-4.png", alt: "Image not Found" },
  { url: "./athena-5.png", alt: "Image not Found" },
  { url: "./athena-6.png", alt: "Image not Found" },
];

export const ProjectContent = () => {
  return (
    <div className="px-10 pb-20">
      <Card className="bg-[#0081a7] border-none text-white col-span-1 md:col-span-4">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-x-2">
            <div>
              <p className="text-[#f07167] text-lg text-center">
                Athena - AI Content Generator
              </p>
              <p className="text-[#f07167] text-sm text-center">
                Made using: React, TypeScript, Tailwind CSS, PostgreSQL
              </p>
            </div>
          </CardTitle>
          <CardContent className="pt-4 px-0 text-center">
            <ImageSlider images={IMAGES} />
            <Link href="https://github.com/ahmadzaki8828/Ai-platform" passHref>
              <p className="text-[#f07167] text-md text-center pt-5">
                Click here to go to Github Repository
              </p>
            </Link>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};
