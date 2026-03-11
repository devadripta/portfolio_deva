import CinemaWrapper from "@/components/CinemaWrapper";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Volunteering from "@/components/sections/Volunteering";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <CinemaWrapper zIndex={1}>
        <Hero />
      </CinemaWrapper>
      <CinemaWrapper zIndex={2}>
        <About />
      </CinemaWrapper>
      <CinemaWrapper zIndex={3}>
        <Education />
      </CinemaWrapper>
      <CinemaWrapper zIndex={4}>
        <Experience />
      </CinemaWrapper>
      <CinemaWrapper zIndex={5}>
        <Projects />
      </CinemaWrapper>
      <CinemaWrapper zIndex={6}>
        <Skills />
      </CinemaWrapper>
      <CinemaWrapper zIndex={7}>
        <Volunteering />
      </CinemaWrapper>
      <CinemaWrapper zIndex={8} isLast>
        <Contact />
      </CinemaWrapper>
      <div style={{ zIndex: 9, position: "relative", background: "#0a0012" }}>
        <Footer />
      </div>
    </main>
  );
}
