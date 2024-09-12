import About from "@/components/About";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechnicalSkills from "@/components/TechnicalSkills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";



export default function Home() {
  return (
    <main>
   <div className="relative bg-science-blue-50/25 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Skills />
      <About />
    </div>
   </div>
   <div className="">
    <TechnicalSkills />
   </div>
   <div className="relative bg-science-blue-50/25 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <Projects />
      <Footer />
   </div>
   </main>
  );
}
