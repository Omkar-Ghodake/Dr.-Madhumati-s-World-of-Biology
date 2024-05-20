import { Separator } from "@radix-ui/react-separator";
import React from "react";

const DirectorInfo = ({ title, desc }: { title: string; desc: string[] }) => {
  return (
    <div className="w-full md:w-1/2 flex my-3 text-md md:pr-24">
      <p className="font-bold w-2/5 text-secondary-foreground pr-2">{title}</p>
      <div className="w-3/5">
        {desc.map((element, index) => (
          <p key={index} className="mb-2">
            {element}
          </p>
        ))}
      </div>
      {/* <Separator asChild /> */}
    </div>
  );
};

export default DirectorInfo;
