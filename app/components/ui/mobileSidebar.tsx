"use client";

import { PanelLeft, X } from "lucide-react";
import { useSidebar } from "@/app/components/ui/sidebar";
import { Button } from "@/app/components/ui/button";
import AppSidebar from "@/app/components/ui/appSidebar"; // Reuse your sidebar UI
import { useEffect } from "react";
import Logo from "../logo";

export default function MobileSidebar() {
  const { open, setOpen, isMobile } = useSidebar();

  // Close sidebar when resizing to desktop
  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open, setOpen]);

  if (!isMobile) return null;

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 text-white hover:bg-white/10"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <PanelLeft className="h-5 w-5" />}
      </Button>

      {/* Overlay Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar (slides in from left) */}
      {open && (
        <div className="fixed inset-y-0 left-0 z-50 w-[17rem] bg-[#0b0b0b] border-r border-white/10 md:hidden">
          <AppSidebarMobileContent />
        </div>
      )}
    </>
  );
}

// Reusable sidebar content (without the outer Sidebar wrapper)
function AppSidebarMobileContent() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed"; // Will always be "expanded" on mobile, but kept for consistency

  // Copy your AppSidebar's inner content here (or refactor into a shared component)
  // For brevity, I'll show a simplified version — you can paste your full content

  return (
    <div className="flex h-full flex-col pt-6">
      {/* Header */}
      <div className="px-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Logo className="h-[35px] w-[30px]" />
          <span className="text-white text-[12px] font-bold">Kidjig</span>
        </div>
      </div>

      {/* Content & Footer — reuse your existing logic */}
      {/* ... (paste your SidebarContent and SidebarFooter here) ... */}

      {/* Example placeholder */}
      <div className="flex-1 p-4">
        <p className="text-white">Mobile sidebar content</p>
      </div>
    </div>
  );
}
