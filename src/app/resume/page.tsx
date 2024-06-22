import Image from "next/image";
import Link from "next/link";

const ResumePage = () => {
  return (
    <>
      <Link href="./">
        <p className="text-[#f07167] text-md text-center pt-5">
          Click here to go to back
        </p>
      </Link>
      <div className="flex items-center justify-center min-h-screen">
        <Image src="/resumeImage.png" width={500} height={500} alt="Resume" />
      </div>
    </>
  );
};

export default ResumePage;
