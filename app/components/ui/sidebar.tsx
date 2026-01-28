"use client";

import * as React from "react";
import { PanelLeft } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { Button } from "@/app/components/ui/button";

// ----------------------
// Constants
// ----------------------
const SIDEBAR_WIDTH = "14rem";
const SIDEBAR_WIDTH_MOBILE = "17rem";
const SIDEBAR_WIDTH_ICON = "4.5rem";

// ----------------------
// Sidebar Context
// ----------------------
type SidebarContextType = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextType | null>(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within SidebarProvider");
  return context;
}

// ----------------------
// Sidebar Provider
// ----------------------
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [desktopOpen, setDesktopOpen] = React.useState(true);

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) setMobileOpen(!mobileOpen);
    else setDesktopOpen(!desktopOpen);
  }, [isMobile, mobileOpen, desktopOpen]);

  const state = isMobile ? "expanded" : desktopOpen ? "expanded" : "collapsed";

  return (
    <SidebarContext.Provider
      value={{
        state,
        open: isMobile ? mobileOpen : desktopOpen,
        setOpen: isMobile ? setMobileOpen : setDesktopOpen,
        isMobile,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// ----------------------
// Sidebar Component
// ----------------------
export const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {
  const { isMobile, state } = useSidebar();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isCollapsed = !isMobile && state === "collapsed";

  const width = isMobile
    ? SIDEBAR_WIDTH_MOBILE
    : isCollapsed
      ? SIDEBAR_WIDTH_ICON
      : SIDEBAR_WIDTH;

  return (
    <div
      ref={ref}
      className={cn(
        "fixed lg:relative top-0 left-0 h-screen dark:bg-[#0b0b0b] bg-[var(--blue)] transition-transform duration-200 ease-in-out text-white z-50 flex flex-col",
        `w-[${width}] min-w-[${width}] max-w-[${width}]`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

// ----------------------
// Sidebar Trigger
// ----------------------
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { toggleSidebar, open, isMobile } = useSidebar();

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className={cn(
        "h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent",
        className,
      )}
      {...props}
    >
      {isMobile && open ? (
        <span className="dark:text-white text-[var(--blue)] text-xl font-bold transition-transform duration-500 ease-in-out">
          ×
        </span>
      ) : (
        <PanelLeft className="h-6 w-6" />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});

// ----------------------
// Sidebar Content & Subcomponents
// ----------------------
export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between px-2 border-b border-white/7",
      className,
    )}
    {...props}
  />
));

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-1 flex-col gap-2 text-white overflow-y-auto p-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
      className,
    )}
    {...props}
  />
));

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-2 p-2 w-full transition-all duration-200",
        isCollapsed ? "flex flex-col items-center justify-center py-6" : "px-2",
        className,
      )}
      {...props}
    />
  );
});
export const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
    {...props}
  />
));

export const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ asChild = false, className, ...props }, ref) => {
  const { state } = useSidebar();
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      className={cn("px-2", state === "collapsed" && "hidden", className)}
      {...props}
    />
  );
});

export const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props} />
));

export const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
));

export const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("group/menu-item relative", className)}
    {...props}
  />
));

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground",
  {
    variants: {
      variant: {
        default: {},
        outline: {},
      },
    },
    defaultVariants: {
      variant: "default",
    },
    compoundVariants: [
      {
        class:
          "data-[state=collapsed]:justify-center " +
          "data-[state=collapsed]:p-2 " +
          "data-[state=collapsed]:gap-0 " +
          "data-[state=collapsed]:h-10",
      },
      {
        class:
          "dark:data-[active=true]:bg-[var(--blue)] data-[active=true]:bg-white data-[active=true]:text-[var(--blue)] dark:data-[active=true]:text-white data-[active=true]:font-medium",
      },
    ],
  },
);

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean; isActive?: boolean }
>(({ asChild = false, isActive = false, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants(), className)}
      {...props}
    />
  );
});
