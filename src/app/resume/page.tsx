import Image from "next/image";

const ResumePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image src="/resumeImage.png" width={500} height={500} alt="Resume" />
    </div>
  );
};

export default ResumePage;
