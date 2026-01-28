"use client";

import Image from "next/image";
import { providers } from "@/app/constants/constants";

const featuredProviders = providers.filter((p) =>
  ["Meta AI", "OpenAI", "Mistral"].includes(p.name),
);

const ProviderLogos = () => {
  return (
    <div className=" flex items-center md:gap-6 gap-16 mt-6 w-full">
      {featuredProviders.flatMap((provider) => [
        // Empty placeholder
        <div
          key={`${provider.name}-empty`}
          className="
            w-16 h-16
            hidden md:flex
            rounded-2xl
            bg-transparent
            border-[0.75px] border-white/5
          "
        />,

        // Logo box
        <div
          key={`${provider.name}-logo`}
          className="
            w-16 h-16
            rounded-2xl
            bg-[#0b0b0b]
            border border-white/10
            flex items-center justify-center
          "
        >
          <Image
            src={provider.src}
            alt=""
            width={32}
            height={32}
            className="object-contain"
            priority
          />
        </div>,
      ])}
    </div>
  );
};

export default ProviderLogos;
