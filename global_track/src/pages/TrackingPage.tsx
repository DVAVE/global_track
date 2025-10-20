import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Clock, Package, CheckCircle, AlertCircle, Truck } from "lucide-react";
import TrackingSearch from "@/components/TrackingSearch";
import { StatusButton } from "@/components/ui/button-variants";

const TrackingPage = () => {
  const [trackingResult] = useState({
    trackingNumber: "MSKU123456789",
    status: "In Transit",
    progress: 65,
    estimatedDelivery: "Dec 28, 2024",
    currentLocation: "Dubai, UAE",
    carrier: "Maersk Line",
    container: "MSKU7654321",
    vessel: "Maersk Edinburgh",
    timeline: [
      {
        date: "Dec 20, 2024",
        time: "14:30",
        location: "Shanghai, China",
        status: "Departed Origin Port",
        icon: CheckCircle,
        completed: true
      },
      {
        date: "Dec 22, 2024",
        time: "09:15",
        location: "Singapore",
        status: "Transit Port",
        icon: CheckCircle,
        completed: true
      },
      {
        date: "Dec 24, 2024",
        time: "16:45",
        location: "Dubai, UAE",
        status: "Customs Clearance",
        icon: Clock,
        completed: true
      },
      {
        date: "Dec 26, 2024",
        time: "Estimated",
        location: "Rotterdam, Netherlands",
        status: "Arrive Destination Port",
        icon: AlertCircle,
        completed: false
      },
      {
        date: "Dec 28, 2024",
        time: "Estimated",
        location: "Frankfurt, Germany",
        status: "Final Delivery",
        icon: Package,
        completed: false
      }
    ]
  });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-12">
          <TrackingSearch />
        </div>

        {/* Tracking Results */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Tracking Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Overview */}
            <Card className="shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-montserrat">
                    Shipment Status
                  </CardTitle>
                  <StatusButton status="warning">
                    {trackingResult.status}
                  </StatusButton>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tracking Number</p>
                    <p className="font-montserrat font-semibold text-lg">{trackingResult.trackingNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                    <p className="font-montserrat font-semibold text-lg text-success">{trackingResult.estimatedDelivery}</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">{trackingResult.progress}%</span>
                  </div>
                  <Progress value={trackingResult.progress} className="h-3" />
                </div>

                <div className="flex items-center space-x-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Current Location: {trackingResult.currentLocation}</span>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="font-montserrat">Shipment Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingResult.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        event.completed 
                          ? 'bg-success text-success-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <event.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-foreground">{event.status}</p>
                          <Badge variant={event.completed ? "default" : "secondary"}>
                            {event.completed ? "Completed" : "Pending"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{event.location}</p>
                        <p className="text-sm text-muted-foreground">{event.date} at {event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Shipment Details */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="font-montserrat">Shipment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Carrier</p>
                  <p className="font-medium">{trackingResult.carrier}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Container</p>
                  <p className="font-medium">{trackingResult.container}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Vessel</p>
                  <p className="font-medium">{trackingResult.vessel}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Type</p>
                  <p className="font-medium">Ocean FCL</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="font-montserrat">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>View Documents</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors flex items-center space-x-2">
                  <Truck className="h-4 w-4" />
                  <span>Schedule Delivery</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>Report Issue</span>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default TrackingPage;