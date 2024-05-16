import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
  id,
  heightPage,
  heightSmPage,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  heightPage?: boolean;
  heightSmPage?: boolean;
}) => {
  return (
    <div
      className={cn(
        `MaxWidthWrapper p-5 md:max-w-[75vw] w-[90vw] mx-auto md:min-h-[88vh] ${
          heightPage &&
          `${heightSmPage && "h-[88vh]"} md:h-[88vh] overflow-y-hidden`
        }`,
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
