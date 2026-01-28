"use client";
import Image from "next/image";
import Link from "next/link";
import microsoft from "@/public/images/Ninja-png.png";
import product from "@/public/images/product-hunt1.png";
import Logo from "../logo";
import { AnimatedItem } from "../animatedItem";

export default function Footer() {
  return (
    <footer className="border-t-[1px] dark:border-white/15 border-[var(--gray)] lg:mt-[7rem] mt-[10rem] lg:p-10 px-4 flex flex-col md:flex-row justify-between">
      <AnimatedItem index={0} delay={0.05}>
        <div>
          {/* footer logo */}
          <div className="flex items-center gap-4">
            <Logo className="h-[43px] w-[40px]" />
            <span className="font-[600] dark:text-[var(--gray)] text-[var(--blue)]">
              Kidjig
            </span>
          </div>
          {/* footer paragraph */}
          <p className="text-[13px] dark:text-[var(--gray)] text-black pt-2 max-w-sm">
            Building the future of AI Products. Empowering creators and
            developers with powerful AI tools.
          </p>
          {/* microsoft logo */}
          <div className="flex flex-col lg:flex-row lg:items-center items-start mt-8 gap-8">
            <div className="flex gap-2 font-[500]">
              <Image src={microsoft} alt="" className="w-[40px] h-full" />
              <span>
                <h4 className="text-[14px] dark:text-[var(--gray)] text-black font-[600]">
                  Microsoft Startup
                </h4>
                <h6 className="text-[13px]">Founders Hub Member</h6>
              </span>
            </div>
            {/* product hunt */}
            <Link href="/api-keys">
              <Image src={product} alt="" className="md:w-[150px] w-full" />
            </Link>
          </div>
        </div>
      </AnimatedItem>
      <AnimatedItem index={1} delay={0.1}>
        <div className="flex gap-[50px] mt-10 md:mt-0">
          <div>
            <h3 className="text-[15px] dark:text-[var(--gray)] text-black font-[600]">
              Developers
            </h3>
            <ul className="text-[13px] dark:text-[var(--gray)] text-[var(--blue)]">
              <li className="py-2">Files</li>
              <li className="py-2">Models</li>
              <li className="py-2">Agents</li>
              <li className="py-2">API Keys</li>
              <li className="py-2">Playground</li>
              <li className="py-2">Analytics</li>
              <li className="py-2">Docs</li>
              <li className="py-2">Support</li>
              <li className="py-2">Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] dark:text-[var(--gray)] text-black font-[600]">
              Connect
            </h3>
            <ul className="text-[13px] dark:text-[var(--gray)] text-[var(--blue)]">
              <li className="py-2">Github</li>
              <li className="py-2">LinkedIn</li>
              <li className="py-2">Discord</li>
              <li className="py-2">X</li>
              <li className="py-2">Youtube</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] dark:text-[var(--gray)] text-black font-[600]">
              Legal
            </h3>
            <ul className="text-[13px] dark:text-[var(--gray)] text-[var(--blue)]">
              <li className="py-2">Privacy Policies</li>
              <li className="py-2">Terms of Services</li>
            </ul>
          </div>
        </div>
      </AnimatedItem>
    </footer>
  );
}
