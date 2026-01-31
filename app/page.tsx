import Header from '@/components/layout/Header';
import HeroSearch from '@/components/home/HeroSearch';
import FeaturedTools from '@/components/home/FeaturedTools';
import PropertyPreviewSection from '@/components/home/PropertyPreviewSection';
import NewProjectsSection from '@/components/home/NewProjectsSection';
import PopularLocationsSection from '@/components/home/PopularLocationsSection';
import InsightsSection from '@/components/home/InsightsSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSearch />
      <FeaturedTools />
      <PropertyPreviewSection />
      <NewProjectsSection />
      <PopularLocationsSection />
      <InsightsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
