import { Button } from "./button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Hero button variant for main CTAs
export const HeroButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, children, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(
      "corporate-gradient text-white font-montserrat font-semibold px-8 py-4 text-lg",
      "hover:shadow-glow transition-all duration-300",
      "transform hover:-translate-y-0.5",
      className
    )}
    {...props}
  >
    {children}
  </Button>
));

// Professional outline button
export const OutlineButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, children, ...props }, ref) => (
  <Button
    ref={ref}
    variant="outline"
    className={cn(
      "border-primary text-primary font-montserrat font-medium",
      "hover:bg-primary hover:text-primary-foreground",
      "transition-all duration-300",
      className
    )}
    {...props}
  >
    {children}
  </Button>
));

// Status button variants for shipment tracking
export const StatusButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { status: "success" | "warning" | "pending" }
>(({ className, children, status, ...props }, ref) => {
  const statusClasses = {
    success: "bg-success text-success-foreground hover:bg-success/90",
    warning: "bg-warning text-warning-foreground hover:bg-warning/90",
    pending: "bg-muted text-muted-foreground hover:bg-muted/90"
  };

  return (
    <Button
      ref={ref}
      className={cn(
        "font-medium transition-all duration-300",
        statusClasses[status],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
});

HeroButton.displayName = "HeroButton";
OutlineButton.displayName = "OutlineButton";
StatusButton.displayName = "StatusButton";