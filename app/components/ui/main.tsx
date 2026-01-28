"use client";
import { AnimatedItem } from "../animatedItem";
import Btn from "@/app/components/btn";


export default function Main() {
  return (
    <>
      <div className="w-full hero-section">
        <div className="text-center lg:mt-20">
          <AnimatedItem index={0} delay={0.05}>
            <h2 className="dark:bg-gradient-to-br from-white from-50% to-[#a3a3a3] to-65% bg-clip-text text-transparent bg-[var(--blue)] text-black md:text-[90px] text-[50px] leading-[100%] font-[500]">
              Enterprise <br />
            </h2>
          </AnimatedItem>
          <AnimatedItem index={1} delay={0.1}>
            <h3 className="dark:bg-gradient-to-br from-white from-50% to-[#a3a3a3] to-65% bg-clip-text text-transparent md:text-[90px] text-[50px] bg-[var(--blue)] leading-[110%] font-[500]">
              AI Gateway
            </h3>
          </AnimatedItem>
          <AnimatedItem index={2} delay={0.15}>
            <p className="md:text-[17px] text-[14px] py-4 dark:text-[var(--gray)] text-black max-w-xl mx-auto">
              Unify, secure, and scale your enterprise AI infrastructure through
              a single, powerful gateway. Access and manage multiple AI
              providers with enterprise- grade security.
            </p>
          </AnimatedItem>
        </div>
        <AnimatedItem index={3} delay={0.2}>
          <div className="flex justify-center items-center gap-[16px] mt-2">
            <Btn
              text="Get Api Keys"
              className="dark:bg-white bg-[var(--blue)] dark:text-black text-white font-[600]"
            />
            <Btn
              text="Schedule Demo"
              className="dark:text-[var(--gray)] text-[var(--blue)]"
            />
          </div>
        </AnimatedItem>
      </div>
    </>
  );
}
