import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, FileCheck, CreditCard, Bell, Users, TrendingUp } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your shipments across air, sea, and land routes with live GPS coordinates and estimated delivery times.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileCheck,
      title: "Document Management",
      description: "Digitize and manage all trade documents including invoices, certificates of origin, and customs forms.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: CreditCard,
      title: "Multi-currency Payments",
      description: "Accept payments in 150+ currencies with integrated billing and automated invoice generation.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get instant alerts via SMS, email, or WhatsApp for shipment updates, delays, and customs clearance.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Multi-user Access",
      description: "Role-based access for clients, customs officials, and logistics teams with customizable permissions.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with trade insights, performance metrics, and predictive analytics.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
            Everything You Need for
            <span className="block text-primary">Global Trade Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From small businesses to enterprise corporations, our platform scales with your needs and simplifies international trade operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-corporate transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-montserrat font-bold mb-4">
              Ready to Transform Your Supply Chain?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who trust GlobalTrack for their international trade operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white/90 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;