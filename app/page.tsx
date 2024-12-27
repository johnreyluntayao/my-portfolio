
import {
  FloatingNav, 
  About, 
  Hero, 
  Skills, 
  TechnicalSkills, 
  Projects, 
  MyApproach, 
  Contact, 
  Footer, 
  navItems
 } from "@/lib/imports"


export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white">
      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Skills />
      <About />

      <div className="relative -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin">
        <TechnicalSkills />
      </div>

      <Projects />
      <MyApproach />
      <Contact />
      <Footer />
      </div>
    </main>
  );
}

