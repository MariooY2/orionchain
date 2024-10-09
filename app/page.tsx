import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/Featured";
import ProjectsSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="Test">
        <FeaturesSection />
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
}
