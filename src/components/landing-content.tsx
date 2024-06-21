"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const aboutMe = [
  {
    name: "Ahmad Zaki",
    title: "Computer Science (Honors) at York University",
    description:
      "High-energy enthusiastic computer science student, actively working on learning as much as possible",
  },
];

const skills = [
  {
    title: "Languages",
    description:
      "Python, C, Java, JavaScript, TypeScript, SQL, HTML, CSS, RISC-V",
  },
  {
    title: "Frameworks",
    description: "React, Tailwind, Next.js, Nodejs, JUnit",
  },
  {
    title: "Tools",
    description:
      "CI/CD, Microsoft Office, Excel, Visual Studio, GitHub, Git, Eclipse, Linux",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-[#fefae0] font-extrabold mb-10">
        About me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-3">
        {aboutMe.map((item) => (
          <Card
            key={item.description}
            className="bg-[#bc6c25] border-none text-white col-span-1 md:col-span-4"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-x-2">
                <div>
                  <p className="text-lg text-center">Name: {item.name}</p>
                  <p className="text-[#fefae0] text-sm text-center">
                    Degree: {item.title}
                  </p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text-center">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-3">
        {skills.map((item) => (
          <Card
            key={item.description}
            className="bg-[#bc6c25] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-x-2">
                <div>
                  <p className="text-lg text-center">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text-center">
                {item.description}
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
