import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import DirectorInfo from "@/components/about-us/DirectorInfo";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <MaxWidthWrapper className="flex flex-col justify-between items-center md:space-x-10 space-y-5 md:space-y-0 pt-10 md:pt-10 px-0 md:px-5">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 md:mb-10">
        <div className="relative h-[25vh] md:h-[50vh] w-[25vh] md:w-[50vh]">
          <Image src={"/medical_expert.png"} alt="" fill />
        </div>

        <div className="flex-1 h-full md:p-5">
          <h3 className="text-3xl md:text-4xl">Dr. Madhumati Maskar</h3>
          <h1 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">
            DIRECTOR
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold drop-shadow-lg text-primary">
            Dr Madhumati&apos;s World of Biology
          </h2>
        </div>
      </div>

      <div
        className="border bg-card text-card-foreground md:min-h-96 h-fit
      w-full rounded-lg shadow-md md:shadow-lg bg-red flex flex-wrap justify-center p-5"
      >
        <DirectorInfo
          title="Engg Sachin Paithane"
          desc={["hello everyone its Sachin Paithane"]}
        />
        <DirectorInfo
          title="Engg Sachin Paithane"
          desc={["hello everyone its Sachin Paithane"]}
        />
        <DirectorInfo
          title="Engg Sachin Paithane"
          desc={["hello everyone its Sachin Paithane"]}
        />
        <DirectorInfo
          title="Engg Sachin Paithane"
          desc={[
            "hello everyone its Sachin Paithane",
            "java with spring boot with reactjs",
          ]}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutUs;
