import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface BookingDialogProps {
  children: React.ReactNode;
  className?: string;
}

export function BookingDialog({ children, className }: BookingDialogProps) {
  const [showLocationPrompt, setShowLocationPrompt] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Check if geolocation is supported
      if ("geolocation" in navigator) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "prompt") {
              setShowLocationPrompt(true);
            } else if (permissionStatus.state === "granted") {
              setShowLocationPrompt(false);
            }
          });
      }
    }
  }, [isOpen]);

  const handleLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(
      () => {
        setShowLocationPrompt(false);
      },
      () => {
        // Even if user denies, we'll still show the booking widget
        setShowLocationPrompt(false);
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[80vh]">
        {showLocationPrompt ? (
          <div className="p-6 flex flex-col items-center justify-center gap-4">
            <MapPin className="w-12 h-12 text-primary" />
            <DialogTitle className="text-xl font-semibold text-center">
              Allow Location Access
            </DialogTitle>
            <DialogDescription className="text-center max-w-md">
              To provide you with the best booking experience and find the nearest available slots, 
              please allow access to your location.
            </DialogDescription>
            <div className="flex gap-4 mt-4">
              <Button
                onClick={handleLocationPermission}
                className="bg-primary hover:bg-primary/90 text-black"
              >
                Allow Location
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowLocationPrompt(false)}
              >
                Skip
              </Button>
            </div>
          </div>
        ) : (
          <iframe
            src="https://getsquire.com/booking/brands/1ff67c92-ebf8-4a94-87a0-ab47bc022457?platform=widget&gclid=null"
            className="w-full h-full border-none"
            title="Book Appointment"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}