import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrackingSearch from "@/components/TrackingSearch";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Tracking Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrackingSearch />
        </div>
      </section>

      <FeaturesSection />

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-montserrat font-semibold mb-4">
              GlobalTrack Import/Export Solutions
            </h3>
            <p className="text-muted-foreground">
              © 2024 GlobalTrack. All rights reserved. Professional logistics tracking for global trade.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
