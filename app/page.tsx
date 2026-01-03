import Image from "next/image";

import Hero from "@/components/home/hero"
import AboutMe from "@/components/home/about"
import Studies from "@/components/home/studies"
import Experience from "@/components/home/experience"
import Certification from "@/components/home/certifications"

import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Studies></Studies>
      <Experience></Experience>
      <Certification></Certification>
      
      <Footer></Footer>
    </main>
  );
}
