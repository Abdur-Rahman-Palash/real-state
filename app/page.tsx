'use client';

import Header from '@/components/layout/Header';
import HeroSearch from '@/components/home/HeroSearch';
import FeaturedTools from '@/components/home/FeaturedTools';
import PropertyPreviewSection from '@/components/home/PropertyPreviewSection';
import NewProjectsSection from '@/components/home/NewProjectsSection';
import PopularLocationsSection from '@/components/home/PopularLocationsSection';
import InsightsSection from '@/components/home/InsightsSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/layout/Footer';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

export default function Home() {
  const scrollRef = useScrollAnimations();

  return (
    <main ref={scrollRef} className="min-h-screen">
      <Header />
      <HeroSearch />
      <section data-scroll-section>
        <FeaturedTools />
      </section>
      <section data-scroll-section>
        <PropertyPreviewSection />
      </section>
      <section data-scroll-section>
        <NewProjectsSection />
      </section>
      <section data-scroll-section>
        <PopularLocationsSection />
      </section>
      <section data-scroll-section>
        <InsightsSection />
      </section>
      <section data-scroll-section>
        <CTASection />
      </section>
      <Footer />
    </main>
  );
}
