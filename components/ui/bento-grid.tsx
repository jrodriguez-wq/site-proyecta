import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const hasContent = title || description || icon;
  
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-lg bg-white border-2 border-gray-200 justify-between flex flex-col overflow-hidden",
        hasContent ? "p-4 space-y-4" : "p-0",
        className
      )}
    >
      {header}
      {hasContent && (
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          {title && (
            <div className="font-sans font-bold text-proyecta-blue mb-2 mt-2">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans font-normal text-gray-700 text-xs">
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
