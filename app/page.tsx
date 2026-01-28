'use client';
import { useEffect, useState } from "react";
import Main from "./components/ui/main";
import Code from "./components/ui/code";
import Cta from "./components/ui/cta";
import Feature from "./components/ui/feature";
import Footer from "./components/ui/footer";
import PlatForm from "./components/ui/platform";
import SupportProviders from "./components/ui/supportProviders";
import Preloader from "./components/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s preloader
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Preloader />}
      {/* main */}
      <Main />
      {/* support Providers */}
      <SupportProviders />
      {/* code */}
      <Code />
      {/* feature */}
      <Feature />
      {/* platform */}
      <PlatForm />
      {/* cta */}
      <Cta />
      {/* footer */}
      <Footer />
    </>
  );
}
