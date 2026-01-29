import { AnimatedItem } from "../animatedItem";
import Image from "next/image";
import integrate from "@/public/images/integrate1.png";
import analytics from "@/public/images/analytics1.png";
import document from "@/public/images/document3.png";
import Btn from "../btn";
import Title from "../title";
import ProviderLogos from "./providerLogo";

export default function PlatForm() {
  return (
    <section>
      <div className="text-center pt-[10rem]">
        <Title text="Platform" />
        <AnimatedItem index={0} delay={0.05}>
          <h2 className="dark:bg-gradient-to-br from-white from-50% to-[#a3a3a3] to-65% bg-clip-text text-transparent md:text-[45px] text-[28px] bg-[var(--blue)] font-[600]">
            Everything you need <br /> for your API
          </h2>
        </AnimatedItem>
        <AnimatedItem index={1} delay={0.1}>
          <p className="dark:text-[var(--gray)] text-black text-[16px] max-w-xl mx-auto">
            Our platform simplifies the API-building process, allowing you to
            monetize, analyze, and protect endpoints.
          </p>
        </AnimatedItem>
        <AnimatedItem index={2} delay={0.15}>
          <div className="mt-10 flex justify-center">
            <Btn
              text="Get Started"
              className="dark:bg-white bg-[var(--blue)] dark:text-black text-white"
            />
          </div>
        </AnimatedItem>
      </div>

      {/* first-col */}
      <div className="flex flex-col lg:flex-row gap-[6px] lg:mx-10 mx-4 mt-20 lg:mt-10">
        {/* simple Integration */}
        <AnimatedItem index={3} delay={0.25}>
          <div className="border-[0.75px] dark:border-white/10 border-[var(--gray)] md:p-8 p-2 rounded-[10px] lg:h-[520px] h-full">
            <div className=" text-center lg:text-start">
              <h3 className="text-[20px] font-[600] pb-3 dark:text-[var(--gray)] text-[var(--blue)]">
                Simple Integration
              </h3>
              <p className="text-[14px] pb-10 max-w-xl mx-auto dark:text-[var(--gray)] text-black">
                Simply change the endpoints in your existing setup, and you're
                ready to go.
              </p>
            </div>
            <div>
              <Image src={integrate} alt="" className="lg:w-[900px] w-full" />
            </div>
          </div>
        </AnimatedItem>
        <AnimatedItem index={4} delay={0.35}>
          {/*advanced analytics*/}
          <div className="border-[0.75px] dark:border-white/10 border-[var(--gray)] md:p-8 p-2 rounded-[10px] lg:h-[520px] h-full mt-10 lg:mt-0">
            <div className="text-center">
              <h3 className="text-[20px] font-[600] pb-3 dark:text-[var(--gray)] text-[var(--blue)]">
                Advanced Analytics
              </h3>
              <p className="text-[13px] max-w-xl mx-auto dark:text-[var(--gray)] text-black">
                Access and Orchestrate Multiple AI Providers in a Secure,
                Enterprise-Grade Environment with Advanced Analytics
              </p>
            </div>
            <div>
              <Image
                src={analytics}
                alt=""
                className="md:h-[300px] h-full w-full mt-4"
              />
            </div>
          </div>
        </AnimatedItem>
      </div>
      {/* second-col */}
      <div className="flex flex-col lg:flex-row gap-[6px] lg:mx-10 mx-4 mt-20 lg:mt-2">
        <AnimatedItem index={5} delay={0.45}>
          {/*document analysis */}
          <div className="border-[0.75px] dark:border-white/10 border-[var(--gray)] md:p-8 p-2 rounded-[10px] lg:h-[350px] h-full">
            <div className="text-center">
              <h3 className="text-[22px] dark:text-[var(--gray)] text-[var(--blue)] font-[600] pb-3">
                Advanced <br />
                Document Analysis
              </h3>
              <p className="text-[13px] dark:text-[var(--gray)] text-black pb-10 max-w-xl mx-auto">
                Seamlessly analyze complex documents across multiple AI
                providers — all within an enterprise- grade, secure ecosystem.
              </p>
            </div>
            <div>
              <Image src={document} alt="" className="h-full w-full" />
            </div>
          </div>
        </AnimatedItem>
        <AnimatedItem index={6} delay={0.55}>
          {/*multiple LLM providers*/}
          <div className="border-[0.75px] dark:border-white/10 border-[var(--gray)] md:p-8 p-2 rounded-[10px] w-full mt-10 lg:mt-0">
            <div className=" text-center lg:text-start">
              <h3 className="text-[20px] font-[600] pb-3 dark:text-[var(--gray)] text-[var(--blue)]">
                Manage Multiple LLM Providers
              </h3>
              <p className="text-[13px] dark:text-[var(--gray)] text-black ">
                Access and manage multiple AI providers with Enterprise- <br />
                grade secure environment.
              </p>
            </div>
            <div>
              <ProviderLogos />
            </div>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}
