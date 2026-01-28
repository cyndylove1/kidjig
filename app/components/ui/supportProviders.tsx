"use client";
import { providers } from "@/app/constants/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Title from "../title";

export default function SupportProviders() {
  return (
    <section className="w-full overflow-hidden pt-[12rem] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <Title text="Supported Providers" />
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          <Marquee
            autoFill
            speed={30}
            gradient={false} 
            className="py-2 mask-l-from-50% mask-r-from-50%"
          >
            {providers.map((provider, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 px-6 whitespace-nowrap"
              >
                <Image
                  src={provider.src}
                  alt={provider.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="dark:text-white text[var(--blue)] text-[20px] font-semibold">
                  {provider.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
