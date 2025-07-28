import ContentSection from "./components/ContentSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContentSection />
        <Sponsors />
      </main>
    </>
  );
}