"use client";

import GoToTop from "@/components/ui/GotoTop";
import { AppBackground } from "@/components/layout/AppBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Teams } from "@/components/sections/Teams";

export default function Home() {
  return (
    <AppBackground>
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        {/* <Teams /> */}
        <FAQ />
        <Contact />
      </main>
      <GoToTop />
      <Footer />
    </AppBackground>
  );
}
