import React from "react";
import Image from "next/image";
import medicalExpert from "@/public/medical_expert.png";

const AdmissionsHead = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-20">
      <div className="relative h-[40vh] md:h-[60vh] w-[30vh] md:w-[50vh] mb-10 md:mb-0">
        <Image
          src={medicalExpert}
          alt=""
          fill
          placeholder="blur"
          className="object-contain drop-shadow-2xl"
        />
      </div>
      <div className="relative h-[40vh] md:h-[60vh] w-[30vh] md:w-[50vh] mb-10 md:mb-0">
        <Image
          src={medicalExpert}
          alt=""
          fill
          placeholder="blur"
          className="object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default AdmissionsHead;
