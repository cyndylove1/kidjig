"use client";

import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import { codeSnippets, highlightSyntax } from "@/app/constants/constants";

const CodeSnippets = () => {
  const [activeTab, setActiveTab] = useState<"javascript" | "python" | "curl">(
    "javascript",
  );
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    setHighlightedCode(highlightSyntax(codeSnippets[activeTab], activeTab));
  }, [activeTab]);

  const tabs = [
    { id: "javascript" as const, label: "JavaScript", icon: <Terminal /> },
    { id: "python" as const, label: "Python", icon: <Terminal /> },
    { id: "curl" as const, label: "cURL", icon: <Terminal /> },
  ];

  return (
    <div className="pt-2">
      {/* Tabs Navigation */}
      <div className="flex items-center md:gap-[24px] gap-[10px] mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
                flex items-center justify-center gap-[2px] py-[7px] rounded-[5px] font-[500] text-[16px] transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-[#202024] text-white p-4"
                    : "hover:bg-[#202024] hover:text-white dark:text-white text-[var(--blue)] p-4"
                }
              `}
          >
            <span className="text-[9px]">{tab.icon}</span>
            <span className="text-[13px]">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Code Display Container */}
      <div className="rounded-[10px] bg-[#181818]">
        <div className="md:p-6 p-2 overflow-x-auto overflow-y-hidden">
          <div
            className={`
            text-sm md:text-base whitespace-pre min-w-max
            ${activeTab === "javascript" ? "text-yellow-100" : ""}
            ${activeTab === "python" ? "text-green-100" : ""}
            ${activeTab === "curl" ? "text-blue-100" : ""}
        `}
          >
            <div
              className="leading-relaxed text-[13px]"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippets;
