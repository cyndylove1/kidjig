import Image from "next/image";
import logo from "@/public/images/kid2.png";

interface LogoProps{
  className?: string;
  }
export default function Logo({className}:LogoProps) {
  return (
    <>
      <div>
        <Image src={logo} alt="" className={`${className}`} />
      </div>
    </>
  );
}
