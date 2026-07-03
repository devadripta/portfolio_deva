import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Volunteering from "@/components/sections/Volunteering";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const card = {
  position: "relative" as const,
  background: "#08000f",
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  boxShadow:
    "0 -12px 48px 0 rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.05)",
};

export default function Home() {
  return (
    <main className="relative">
      {/* Hero has its own full-screen background */}
      <Hero />

      <div style={card}><About /></div>
      <div className="h-4 md:h-6 bg-[#05000a]" />
      <div style={card}><Education /></div>
      <div className="h-4 md:h-6 bg-[#05000a]" />
      <div style={card}><Experience /></div>
      <div className="h-4 md:h-6 bg-[#05000a]" />
      <div style={card}><Projects /></div>
      <div className="h-4 md:h-6 bg-[#05000a]" />
      <div style={card}><Skills /></div>
      <div className="h-4 md:h-6 bg-[#05000a]" />
      <div style={card}><Volunteering /></div>
      <div className="h-4 md:h-6 bg-[#05000a]" />
      <div style={card}><Contact /></div>

      <div style={{ position: "relative", background: "#0a0012" }}>
        <Footer />
      </div>
    </main>
  );
}
