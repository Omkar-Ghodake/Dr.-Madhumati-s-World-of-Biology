import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AdmissionsHead from "@/components/admissions/AdmissionsHead";
import ShortVideos from "@/components/admissions/ShortVideos";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <MaxWidthWrapper>
      <AdmissionsHead />
      <div className="flex justify-center items-center mb-10">
        <Button size={"lg"} className="text-xl font-semibold" asChild>
          <Link className="" href={"/contact-us"}>
            Contact Us
          </Link>
        </Button>
      </div>
      <ShortVideos />
    </MaxWidthWrapper>
  );
};

export default page;
