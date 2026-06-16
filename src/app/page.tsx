import { CinematicSection } from "@/components/primitives/CinematicSection";
import { ScrollAtmosphereBridge } from "@/features/atmosphere/ScrollAtmosphereBridge";
import { ArchiveBreathesSection } from "@/features/archive/ArchiveBreathesSection";
import { BooksAsForestsSection } from "@/features/books/BooksAsForestsSection";
import { HeroSection } from "@/features/hero/HeroSection";
import { MindInTheWildSection } from "@/features/mind-wild/MindInTheWildSection";
import { RainCountrySection } from "@/features/rain-country/RainCountrySection";
import { kannadaText } from "@/lib/content/kannada";

export default function Home() {
  return (
    <main>
      <ScrollAtmosphereBridge />
      <HeroSection />
      <RainCountrySection />
      <MindInTheWildSection />
      <BooksAsForestsSection />
      <ArchiveBreathesSection />
      <CinematicSection
        id="threshold"
        atmosphere="rain-manuscript"
        className="min-h-[110svh] items-start justify-center px-6 py-[22vh] md:px-12"
      >
        <div className="mx-auto max-w-4xl">
          <p className="museum-label mb-8">ARCHIVE ENGINE / FOUNDATION</p>
          <h2 className="max-w-3xl font-kannada text-[clamp(2.35rem,7vw,6.5rem)] leading-[1.08] text-[color:var(--atmosphere-fg)]">
            {kannadaText.rainPaperScent}
          </h2>
          <p className="mt-8 max-w-2xl text-balance font-editorial text-xl leading-9 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_72%,transparent)] md:text-2xl">
            The cinematic core is ready for books, archives, timelines, and
            living fragments of Tejaswi&apos;s world to enter the frame.
          </p>
        </div>
      </CinematicSection>
    </main>
  );
}
