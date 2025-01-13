
import {
  FloatingNav, 
  About, 
  Hero, 
  Skills, 
  TechStack,  
  Projects2,
  MyApproach, 
  Contact, 
  Footer, 
  navItems,
  BackToTop,
 } from "@/lib/imports"


export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white">
      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin place-items-center">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Skills />
      <About />
      <div className="w-full">
        <TechStack />
      </div>
      <Projects2 />
      <MyApproach />
      <Contact />
      <Footer />
      <BackToTop />
      </div>
    </main>
  );
}

