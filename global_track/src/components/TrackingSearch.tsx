import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Package, FileText, Plane, Ship } from "lucide-react";
import { HeroButton } from "./ui/button-variants";

const TrackingSearch = () => {
  const [searchType, setSearchType] = useState("tracking");
  const [searchValue, setSearchValue] = useState("");

  const searchTypes = [
    { value: "tracking", label: "Tracking Number", icon: Package },
    { value: "container", label: "Container ID", icon: Ship },
    { value: "bill", label: "Bill of Lading", icon: FileText },
    { value: "airway", label: "Airway Bill", icon: Plane },
  ];

  const handleSearch = () => {
    console.log("Searching for:", searchType, searchValue);
    // This would navigate to tracking results
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-corporate">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-2">
            Track Your Shipment
          </h2>
          <p className="text-muted-foreground text-lg">
            Enter your tracking details to get real-time shipment updates
          </p>
        </div>

        <div className="space-y-6">
          {/* Search Type Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {searchTypes.map((type) => (
              <Button
                key={type.value}
                variant={searchType === type.value ? "default" : "outline"}
                className={`p-4 h-auto flex flex-col space-y-2 ${
                  searchType === type.value 
                    ? "corporate-gradient text-white" 
                    : "border-border hover:border-primary"
                }`}
                onClick={() => setSearchType(type.value)}
              >
                <type.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{type.label}</span>
              </Button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder={`Enter ${searchTypes.find(t => t.value === searchType)?.label.toLowerCase() || 'tracking number'}`}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="h-14 text-lg border-border focus:border-primary"
              />
            </div>
            <HeroButton 
              onClick={handleSearch}
              className="h-14 px-8 flex items-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Track Shipment</span>
            </HeroButton>
          </div>

          {/* Quick Examples */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Try these sample tracking numbers:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["MSKU123456789", "HLBU987654321", "DHL123456789"].map((example) => (
                <Button
                  key={example}
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchValue(example)}
                  className="text-primary hover:bg-primary/10"
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackingSearch;