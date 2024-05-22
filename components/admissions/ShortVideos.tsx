import React from "react";
import Image from "next/image";
import medicalExpert from "@/public/medical_expert.png";

const ShortVideos = () => {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll p-2">
      <div className="flex w-fit">
        <div className="relative w-[15rem] h-[50vh] border-[1px] border-black rounded-xl mx-5 select-none">
          <Image
            src={medicalExpert}
            alt=""
            fill
            placeholder="blur"
            className="object-contain drop-shadow-2xl"
          />
        </div>
        <div className="relative w-[15rem] h-[50vh] border-[1px] border-black rounded-xl mx-5 select-none">
          <Image
            src={medicalExpert}
            alt=""
            fill
            placeholder="blur"
            className="object-contain drop-shadow-2xl"
          />
        </div>
        <div className="relative w-[15rem] h-[50vh] border-[1px] border-black rounded-xl mx-5 select-none">
          <Image
            src={medicalExpert}
            alt=""
            fill
            placeholder="blur"
            className="object-contain drop-shadow-2xl"
          />
        </div>
        <div className="relative w-[15rem] h-[50vh] border-[1px] border-black rounded-xl mx-5 select-none">
          <Image
            src={medicalExpert}
            alt=""
            fill
            placeholder="blur"
            className="object-contain drop-shadow-2xl"
          />
        </div>
        <div className="relative w-[15rem] h-[50vh] border-[1px] border-black rounded-xl mx-5 select-none">
          <Image
            src={medicalExpert}
            alt=""
            fill
            placeholder="blur"
            className="object-contain drop-shadow-2xl"
          />
        </div>
        <div className="relative w-[15rem] h-[50vh] border-[1px] border-black rounded-xl mx-5 select-none">
          <Image
            src={medicalExpert}
            alt=""
            fill
            placeholder="blur"
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ShortVideos;
