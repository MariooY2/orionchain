import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";
import ReasonsToChooseUs from "@/components/ChooseUs";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="Test">
        <ReasonsToChooseUs/>
        <Services/>
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
}
