import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSlider from "@/components/ProjectsSlider";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="Test">
        <Services />
        <ProcessSection />
        <StatsSection />
        <ProjectsSlider />
        <TeamSection />
        <CTABanner />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
