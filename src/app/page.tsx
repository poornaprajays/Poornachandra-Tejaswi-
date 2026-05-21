import { ScrollAtmosphereBridge } from "@/features/atmosphere/ScrollAtmosphereBridge";
import { BooksAsForestsSection } from "@/features/books/BooksAsForestsSection";
import { HeroSection } from "@/features/hero/HeroSection";
import { MindInTheWildSection } from "@/features/mind-wild/MindInTheWildSection";
import { RainCountrySection } from "@/features/rain-country/RainCountrySection";

export default function Home() {
  return (
    <main>
      <ScrollAtmosphereBridge />
      <HeroSection />
      <RainCountrySection />
      <MindInTheWildSection />
      <BooksAsForestsSection />
    </main>
  );
}
