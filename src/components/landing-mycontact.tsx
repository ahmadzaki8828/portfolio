"use client";

import Image from "next/image";
import Link from "next/link";

export const MyContact = () => {
  return (
    <div className="flex items-center justify-center space-x-4 pb-3">
      <Link href="https://github.com/ahmadzaki8828" passHref>
        <Image src="/github.png" height={60} width={60} alt="GitHub Logo" />
      </Link>
      <Link href="https://www.linkedin.com/in/ahmaadzaki/" passHref>
        <Image src="/linkedin.png" height={60} width={60} alt="LinkedIn Logo" />
      </Link>
      <Link href="mailto:ahmadzaki8828@gmail.com" passHref>
        <Image src="/gmail.png" height={60} width={60} alt="Gmail Logo" />
      </Link>
    </div>
  );
};
