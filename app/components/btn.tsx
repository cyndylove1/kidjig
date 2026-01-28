import { ChevronRight } from "lucide-react";

interface ButtonProps {
  text?: string;
  type?: "button";
  className?: string;
}

export default function Btn({ text, className, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-[6px] h-[35px] px-4 cursor-pointer rounded-[5px] text-[14px] font-[600] transition-all duration-300 ease-in-out 
        hover:scale-105
        ${className}`}
    >
      {text}
      <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
        <ChevronRight size={15} />
      </span>
    </button>
  );
}
