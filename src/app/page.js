import ContentSection from "./components/ContentSection";
import FAQ from "./components/Faq";
import Hero from "./components/Hero";
import InfoBanner from "./components/InfoBanner";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContentSection />
        <Sponsors />
        <Testimonials />
        <FAQ />
        <InfoBanner />
      </main>
    </>
  );
}