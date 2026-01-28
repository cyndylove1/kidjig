"use client";

import * as React from "react";
import Image from "next/image";
import profile from "@/public/images/man2.png";
import { usePathname } from "next/navigation";
import Logo from "@/app/components/logo";
import { main, services, creative, resources } from "../../constants/constants";
import { HiOutlineLogin } from "react-icons/hi";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarTrigger,
} from "@/app/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { cn } from "@/app/lib/utils";

export default function AppSidebar() {
  const { state, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";
  const [isHeaderHovered, setIsHeaderHovered] = React.useState(false);
  const [sidebarOpenMobile, setSidebarOpenMobile] = React.useState(false);

  const handleMobileToggle = () => setSidebarOpenMobile(!sidebarOpenMobile);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsHeaderHovered(false);
  }, [isCollapsed]);

  const renderMenuItems = (items: typeof main) => {
    return items.map((item) => {
      const Icon = item.icon;
      const isActive = pathname === item.url;

      return (
        <SidebarMenuItem key={item.title}>
          {isCollapsed ? (
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <a href={item.url}>
                      <Icon className="text-sidebar-foreground" />
                      <span className="sr-only">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right" align="center" sideOffset={8}>
                  <h2 className="text-[13px]">{item.title}</h2>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <SidebarMenuButton asChild isActive={isActive}>
              <a href={item.url}>
                <Icon className="text-sidebar-foreground" />
                <span className="text-[12px]">{item.title}</span>
              </a>
            </SidebarMenuButton>
          )}
        </SidebarMenuItem>
      );
    });
  };

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      {isMobile && (
        <button
          onClick={handleMobileToggle}
          className="fixed top-4 left-4 z-[100] dark:text-white text-[var(--blue)] p-2 rounded-md"
        >
          <HiOutlineMenu size={24} />
        </button>
      )}

      {/* MOBILE OVERLAY */}
      {isMobile && sidebarOpenMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] transition-all duration-500 ease-in-out"
          onClick={() => setSidebarOpenMobile(false)}
        />
      )}

      <Sidebar
        className={cn(
          "fixed z-[100] h-screen transform",
          isMobile
            ? sidebarOpenMobile
              ? "translate-x-0"
              : "-translate-x-full"
            : isCollapsed
              ? "-translate-x-[calc(100%-60px)] lg:translate-x-0"
              : "translate-x-0",
        )}
      >
        {/* HEADER */}
        <SidebarHeader className="border-b dark:border-white/7 border-[var(--blue)] relative py-4">
          <div
            className="w-full flex items-center justify-between px-2"
            onMouseEnter={() => setIsHeaderHovered(true)}
            onMouseLeave={() => setIsHeaderHovered(false)}
          >
            {/* COLLAPSED LOGIC */}
            {isCollapsed && !isMobile ? (
              <div className="flex justify-center w-full">
                {isHeaderHovered ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex justify-center">
                          <SidebarTrigger />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="right" align="center">
                        <h2 className="text-[13px]">Open sidebar</h2>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <div className="flex justify-center">
                    <Logo className="h-[35px] w-[30px]" />
                  </div>
                )}
              </div>
            ) : (
              // EXPANDED LOGIC
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-[5px]">
                  <Logo className="h-[35px] w-[30px]" />
                  {!isCollapsed && (
                    <span className="text-white text-[12px] font-bold">
                      Kidjig
                    </span>
                  )}
                </div>
                <SidebarTrigger className="hidden md:flex" />
              </div>
            )}

            {/* MOBILE MENU */}
            {isMobile && (
              <button onClick={handleMobileToggle} className="p-2 rounded-md">
                {sidebarOpenMobile ? (
                  <HiX size={24} className="text-white" />
                ) : (
                  <HiOutlineMenu
                    size={24}
                    className="dark:text-white text-[var(--blue)]"
                  />
                )}
              </button>
            )}
          </div>
        </SidebarHeader>

        {/* CONTENT */}
        <SidebarContent className="whitespace-nowrap">
          {/* WORKSPACE */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <div className="flex items-center gap-2 pb-2">
                <span>📋</span>
                <h2 className="font-bold text-[10px]">WORKSPACE</h2>
              </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{renderMenuItems(main)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* AI SERVICES */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <div className="flex items-center gap-2 pb-2">
                <span>🤖</span>
                <h2 className="font-bold text-[10px]">AI SERVICES</h2>
              </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{renderMenuItems(services)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* CREATIVE */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <div className="flex items-center gap-2 pb-2">
                <span>🎨</span>
                <h2 className="font-bold text-[10px]">CREATIVE TOOLS</h2>
              </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{renderMenuItems(creative)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* RESOURCES */}
          <SidebarGroup>
            <SidebarGroupLabel>
              <div className="flex items-center gap-2 pb-2">
                <span>ℹ️</span>
                <h2 className="font-bold text-[10px]">RESOURCES</h2>
              </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{renderMenuItems(resources)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* FOOTER */}
        <SidebarFooter>
          <div>
            {/* PROFILE */}
            <div
              className={cn(
                "flex items-center gap-2",
                isCollapsed && "flex-col gap-3",
              )}
            >
              <Image
                src={profile}
                alt="profile-pic"
                className="w-[30px] h-[30px] rounded-full"
              />
              {!isCollapsed && (
                <div>
                  <h2 className="text-[12px] font-[500]">Guest</h2>
                  <h3 className="text-[10px]">Not signed in</h3>
                </div>
              )}
            </div>

            {/* LOGIN */}
            <div
              className={cn(
                "flex items-center gap-2",
                isCollapsed ? "flex-col gap-2 my-0" : "my-4",
              )}
            >
              <HiOutlineLogin size={20} />
              {!isCollapsed && (
                <h2 className="text-[13px] font-[600]">Log in</h2>
              )}
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
