"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Ahmad Zaki",
    title: "Computer Science at York University",
    description:
      "High-energy enthusiastic computer science student, actively working on learning as much as possible",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-[#fefae0] font-extrabold mb-10">
        About me
      </h2>
      <div className="grid grid-cols-1">
        {testimonials.map((items) => (
          <Card
            key={items.description}
            className="bg-[#bc6c25] border-none text-white "
          >
            <CardHeader>
              <CardTitle className="flex-items-center gap-x-2">
                <div>
                  <p className="text-lg text-center">Name: {items.name}</p>
                  <p className="text-[#fefae0] text-sm text-center">
                    Studies: {items.title}
                  </p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text-center">
                {items.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div>
        <h2 className="text-center text-4xl text-[#fefae0] font-extrabold mb-10 p-9">
          Projects
        </h2>
      </div>
    </div>
  );
};
