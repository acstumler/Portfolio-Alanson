import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Believe } from "@/components/Believe";
import { WhatIDo } from "@/components/WhatIDo";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Believe />
        <WhatIDo />
        <Background />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
