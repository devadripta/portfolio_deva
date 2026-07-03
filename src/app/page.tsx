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
      {/* Projects is not sticky — too tall for viewport, must scroll naturally */}
      <div style={{
        position: "relative",
        zIndex: 5,
        background: "#08000f",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        boxShadow: "0 -12px 48px 0 rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.05)",
        marginTop: 0,
      }}>
        <Projects />
      </div>
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
