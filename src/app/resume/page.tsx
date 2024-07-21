import { MyContact } from "@/components/My-Contact";
import Image from "next/image";
import Link from "next/link";

const ResumePage = () => {
  return (
    <>
      <Link href="./">
        <p className="text-[#f07167] text-xl text-center pt-5">
          Click here to go to back
        </p>
      </Link>
      <div className="flex items-center justify-center py-10">
        <a href="/resume.pdf" target="_blank">
          <Image src="/resumeImage.png" width={500} height={500} alt="Resume" />
        </a>
      </div>
      <div className="flex items-center justify-center py-5">
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="text-[#f07167] text-xl"
        >
          Download
        </a>
      </div>
      <MyContact />
    </>
  );
};

export default ResumePage;
