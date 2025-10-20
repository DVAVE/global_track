import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Package, 
  Clock, 
  DollarSign, 
  Ship, 
  Plane, 
  Truck,
  AlertTriangle,
  CheckCircle 
} from "lucide-react";

const DashboardPage = () => {
  const stats = [
    {
      title: "Active Shipments",
      value: "156",
      change: "+12%",
      trend: "up",
      icon: Package,
      color: "text-blue-600"
    },
    {
      title: "Pending Customs",
      value: "23",
      change: "-8%",
      trend: "down",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      title: "Monthly Revenue",
      value: "$847K",
      change: "+24%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "On-Time Delivery",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: CheckCircle,
      color: "text-emerald-600"
    }
  ];

  const recentShipments = [
    {
      id: "MSKU123456789",
      route: "Shanghai → Rotterdam",
      type: "Sea",
      status: "In Transit",
      progress: 65,
      eta: "Dec 28, 2024",
      icon: Ship
    },
    {
      id: "DHL987654321",
      route: "Frankfurt → New York",
      type: "Air",
      status: "Customs",
      progress: 80,
      eta: "Dec 25, 2024",
      icon: Plane
    },
    {
      id: "FDX456789123",
      route: "Los Angeles → Tokyo",
      type: "Air",
      status: "Delivered",
      progress: 100,
      eta: "Delivered",
      icon: Plane
    },
    {
      id: "UPS789123456",
      route: "London → Dubai",
      type: "Ground",
      status: "In Transit",
      progress: 45,
      eta: "Dec 30, 2024",
      icon: Truck
    }
  ];

  const alerts = [
    {
      type: "warning",
      message: "Shipment MSKU123456789 delayed due to weather conditions",
      time: "2 hours ago"
    },
    {
      type: "success",
      message: "Customs clearance completed for DHL987654321",
      time: "4 hours ago"
    },
    {
      type: "error",
      message: "Documentation required for FDX456789123",
      time: "6 hours ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-success text-success-foreground';
      case 'in transit': return 'bg-primary text-primary-foreground';
      case 'customs': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'error': return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold text-foreground mb-2">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Monitor your global shipments and track performance metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-montserrat font-bold">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className={`h-4 w-4 ${stat.trend === 'up' ? 'text-success' : 'text-destructive'} mr-1`} />
                      <span className={`text-sm ${stat.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Shipments */}
          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="font-montserrat">Recent Shipments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentShipments.map((shipment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <shipment.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{shipment.id}</p>
                          <p className="text-sm text-muted-foreground">{shipment.route}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(shipment.status)}>
                          {shipment.status}
                        </Badge>
                        <div className="mt-2 w-24">
                          <Progress value={shipment.progress} className="h-2" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{shipment.eta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts & Notifications */}
          <div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="font-montserrat">Recent Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-accent/20">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-md mt-6">
              <CardHeader>
                <CardTitle className="font-montserrat">Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Delivery Rate</span>
                    <span className="text-sm font-medium">94.2%</span>
                  </div>
                  <Progress value={94.2} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Customer Satisfaction</span>
                    <span className="text-sm font-medium">4.8/5</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Cost Efficiency</span>
                    <span className="text-sm font-medium">88.5%</span>
                  </div>
                  <Progress value={88.5} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;