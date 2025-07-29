import ContentSection from "./components/ContentSection";
import Hero from "./components/Hero";
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
      </main>
    </>
  );
}