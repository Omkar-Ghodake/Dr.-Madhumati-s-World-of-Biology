import React from "react";
import Image from "next/image";
import medicalStudent from "@/public/ads/home_ad_banner.jpg";

const AdmissionsHead = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-20 md:pt-10">
      <div className="relative h-[40vh] md:h-[50vh] w-full md:w-1/2">
        <Image
          src={medicalStudent}
          alt=""
          fill
          placeholder="blur"
          className="object-contain p-2"
        />
      </div>
      <div className="relative flex justify-center items-center h-[40vh] md:h-[50vh] w-full md:w-1/2">
        <video controls autoPlay={true} className="w-full h-full p-2">
          <source src={"/shortVideos/mainVideo.mp4"} />
          Your browser does not support the video tag...
        </video>
      </div>
    </div>
  );
};

export default AdmissionsHead;
