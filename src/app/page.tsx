import Navbar from "@/components/Navbar";
import HeroAnimation from "@/components/HeroAnimation";
import SlickGorillaSection from "@/components/SlickGorillaSection";
import TheBarbers from "@/components/TheBarbers";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroAnimation />
      <SlickGorillaSection />
      <TheBarbers />
      <LocationSection />
      <Footer />
    </main>
  );
}
