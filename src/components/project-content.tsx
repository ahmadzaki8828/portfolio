"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageSlider } from "./image-slider";

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
      <Card className="bg-[#bc6c25] border-none text-white col-span-1 md:col-span-4">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-x-2">
            <div>
              <p className="text-lg text-center">All-in-One AI platform</p>
              <p className="text-[#fefae0] text-sm text-center">
                Made using: React, TypeScript, Tailwind CSS, PostgreSQL
              </p>
            </div>
          </CardTitle>
          <CardContent className="pt-4 px-0 text-center">
            <ImageSlider images={IMAGES} />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};
