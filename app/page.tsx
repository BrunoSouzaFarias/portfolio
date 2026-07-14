import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import ProjectStack from "@/components/ProjectStack";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <ProjectStack />
        <Experience />
        <Faq />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
