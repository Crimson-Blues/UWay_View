import * as React from "react";
import { ChevronIcon } from "./icons/ChevronIcon";

interface FilterButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function FilterButton({
  icon,
  label,
  onClick,
  className = "",
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex w-55 h-12 py-1.5 px-3 justify-center items-center gap-2.5 rounded-full bg-purple-200 hover:bg-purple-300 max-lg:w-56 max-sm:w-full max-sm:h-11   ${className}`}
    >
      <div className={"flex h-7 px-1 items-center gap-2.5 max-sm:h-6"}>
        {icon}
        <div
          className={"text-purple-700 font-roboto text-lg font-normal leading-8 max-lg:text-xl max-sm:text-lg max-sm:w-auto max-sm:h-6 max-sm:leading-6"}
        >
          {label}
        </div>
        <div className={"flex w-7 h-7 justify-center items-center aspect-square max-sm:w-6 max-sm:h-6"}>
          <ChevronIcon />
        </div>
      </div>
    </button>
  );
}
