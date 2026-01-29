"use client";
import { AnimatedItem } from "../animatedItem";
import Image from "next/image";
import github from "@/public/images/github2.png";
import Btn from "../btn";
import Title from "../title";

export default function Feature() {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 items-center md:mx-10 mx-4 md:mt-20 mt-[7rem]">
      <div className="text-center lg:text-start">
        <Title text="Features" />
        <AnimatedItem index={0} delay={0.05}>
          <h2 className="dark:bg-gradient-to-br from-white from-50% to-[#a3a3a3] to-65% bg-clip-text text-transparent md:text-[45px] text-[30px] bg-[var(--blue)] font-[600] pt-4">
            Any language.
          </h2>
        </AnimatedItem>
        <AnimatedItem index={1} delay={0.1}>
          <p className="dark:text-[var(--gray)] text-black max-w-md">
            Connect to leading AI providers through one <br /> streamlined interface.
            Compatible with existing <br /> OpenAI clients and offering  an intuitive
            REST API
          </p>
        </AnimatedItem>
        <AnimatedItem index={2} delay={0.15}>
          <div className="mt-10 flex lg:justify-start justify-center">
            <Btn
              text="Get Started"
              className="dark:bg-white bg-[var(--blue)] dark:text-black text-white"
            />
          </div>
        </AnimatedItem>
      </div>
      <AnimatedItem index={3} delay={0.35}>
        {/* github image */}
        <div className="border-[0.75px] dark:border-white/10 border-[var(--gray)] rounded-[10px] mt-6 lg:mt-0 p-2">
          <Image src={github} alt="" />
        </div>
      </AnimatedItem>
    </section>
  );
}
