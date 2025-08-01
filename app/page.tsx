import CarouselSection from "./components/CarouselSection";
import FeatureImageSection from "./components/FeatureImageSection";
import FeaturesSwiperSection from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PersonalizeSection from "./components/PersonalizeSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* Header ichida mavjud bo‘lsa, bu joyda chaqirish shart emas */}
      <Hero />
      <CarouselSection />
      <FeaturesSwiperSection />
      <PersonalizeSection />
      <FeatureImageSection />
      <Footer />
    </main>
  );
}
