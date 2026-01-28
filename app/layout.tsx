import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto } from "next/font/google";
import { SidebarProvider } from "@/app/components/ui/sidebar";
import AppSidebar from "./components/ui/appSidebar";
import ThemeToggle from "./components/themeToggle";
import "./globals.css";


const roboto = Roboto({
  variable: "--roboto-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kidjig platform",
  description: "Kidjig is an AI platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`} suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          <SidebarProvider>
            <div className="flex h-screen overflow-hidden">
              <AppSidebar />
              <ThemeToggle />
              <main className="overflow-auto">{children}</main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
