import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechnicalSkills from "@/components/TechnicalSkills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="flex justify-center items-center flex-col  mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Skills />
          <About />
        </div>
      </div>

      <div>
        <TechnicalSkills />
      </div>

      <div className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <Projects />
        <Contact />
      </div>

      
      <Footer />
    </main>
  );
}

