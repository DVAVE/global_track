import { ArrowRight, Globe, Shield, BarChart3 } from "lucide-react";
import { HeroButton, OutlineButton } from "./ui/button-variants";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-logistics.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Track shipments worldwide across all major carriers and ports",
      tag: "200+ Ports Worldwide"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with full customs compliance verification",
      tag: "ISO 27001 Certified"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Advanced insights and predictive analytics for your supply chain",
      tag: "AI-Powered Insights"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Global logistics and shipping operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-montserrat font-bold leading-tight">
                Global Trade
                <span className="block text-secondary">Simplified</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
                The world's most comprehensive import/export tracking platform. 
                Monitor your shipments, manage customs, and optimize your global supply chain.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <HeroButton className="text-lg px-8 py-4 bg-white text-black hover:bg-white/90">
                Start Tracking
                <ArrowRight className="ml-2 h-5 w-5" />
              </HeroButton>
              <OutlineButton className="text-lg px-8 py-4 border-white text-black hover:bg-white hover:text-primary">
                Watch Demo
              </OutlineButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold">500K+</div>
                <div className="text-white/80">Shipments Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold">150+</div>
                <div className="text-white/80">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold">99.9%</div>
                <div className="text-white/80">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 corporate-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-secondary font-medium mb-1">FEATURE</div>
                      <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white">
                        Our platform provides: {feature.description}
                      </p>
                      <span className="text-sm text-secondary mt-2 inline-block font-medium">{feature.tag}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;