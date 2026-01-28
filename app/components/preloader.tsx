'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/kid2.png"; 

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-500">
      <div className="animate-zoom">
        <Image src={logo} alt="Loading..." width={100} height={100} />
      </div>
    </div>
  );
}
