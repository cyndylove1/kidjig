"use client";
import { AnimatedItem } from "../animatedItem";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import Btn from "../btn";
import Title from "../title";
import CodeSnippets from "./codesnippet";

export default function Code() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("Code to copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section>
      <div className="text-center pt-[8rem] ">
        <Title text="Code" />
        <AnimatedItem index={0} delay={0.05}>
          <h2 className="dark:bg-gradient-to-br from-white from-50% to-[#a3a3a3] to-65% bg-clip-text bg-[var(--blue)] text-transparent md:text-[45px] text-[28px] font-[600] max-w-2xl mx-auto">
            Single Gateways to All Models
          </h2>
        </AnimatedItem>
        <AnimatedItem index={1} delay={0.1}>
          <p className="py-4 dark:text-[var(--gray)] text-black max-w-xl mx-auto">
            Connect to leading Ai providers through one streamlined
            interface.Compatible with existing OpenAi clients.
          </p>
        </AnimatedItem>
        <AnimatedItem index={2} delay={0.15}>
          <div className="flex justify-center items-center gap-[16px] mt-2">
            <Btn
              text="Get Started"
              className="dark:bg-white dark:text-black bg-[var(--blue)] text-white"
            />
            <Btn
              text="Visit the docs"
              className="dark:text-[var(--gray)] text-[var(--blue)]"
            />
          </div>
        </AnimatedItem>
      </div>
      <AnimatedItem index={3} delay={0.25}>
        <div className="border-[0.75px] dark:border-white/15 border-[var(--gray)] md:mx-10 mx-4 mt-10 rounded-[10px]">
          <div className="flex justify-between items-center dark:text-white text-[var(--blue)] p-2 p-4">
            <h2 className="md:text-xl text-lg font-[600]">
              Make your first API call
            </h2>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-2 dark:hover:bg-[#202024] hover:bg-[var(--blue)] hover:text-white rounded-full"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-[#4ec9b0]" />
                </>
              ) : (
                <>
                  <Copy size={14} />
                </>
              )}
            </button>
          </div>
          {/* <CodeSnippets /> */}
          <div className="p-2">
            <CodeSnippets />
          </div>
        </div>
      </AnimatedItem>
      
      {/* Instructions */}
      <AnimatedItem index={4} delay={0.35}>
        <div className="border-[0.75px] dark:border-white/15 border-[var(--gray)] md:mx-10 p-2 md:p-4 h-[150px] m-4 rounded-[10px]">
          <div className="bg-[#181818] p-4 rounded-[10px]">
            <h2 className="text-white font-[600] text-[16px]">Authorization</h2>
            <p className="py-2 text-[13px] text-[var(--gray)]">
              Include your API key in the X-Api-Key header for all requests:
            </p>
            <div className="bg-[#006fff] py-[3px] px-2 mt-[5px] rounded-[5px] text-[11px] text-white w-fit">
              X-Api-Key: YOUR_API_KEY
            </div>
          </div>
        </div>
      </AnimatedItem>
    </section>
  );
}
