"use client";
import { AnimatedItem } from "../animatedItem";
import Btn from "../btn";

export default function Cta() {
  return (
    <section>
      <div>
        <AnimatedItem index={0} delay={0.05}>
          <h2 className="text-center dark:bg-gradient-to-br from-white from-50% to-[#a3a3a3] bg-[var(--blue)] max-w-xl mx-auto to-65% bg-clip-text text-transparent md:text-[50px] text-[30px] font-[600] lg:mt-[12rem] mt-[10rem]">
            Begin Your AI Journey Start today.
          </h2>
        </AnimatedItem>
        <AnimatedItem index={1} delay={0.1}>
          <div className="flex justify-center flex-col md:flex-row items-center gap-[16px] mt-2">
            <Btn
              text="Chat With Us"
              className="dark:text-[var(--gray)] text-[var(--blue)]"
            />
            <Btn
              text="Get Started"
              className="dark:bg-white bg-[var(--blue)] dark:text-black text-white font-[600]"
            />
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}
