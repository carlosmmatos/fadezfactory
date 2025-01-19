import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useRef } from "react";

interface BookingDialogProps {
  children: React.ReactNode;
  className?: string;
}

export function BookingDialog({ children, className }: BookingDialogProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Function to handle messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from Squire's domain
      if (!event.origin.includes('getsquire.com')) return;

      if (event.data?.type === 'LOCATION_REQUEST') {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Send location back to iframe
            if (iframeRef.current?.contentWindow) {
              iframeRef.current.contentWindow.postMessage({
                type: 'LOCATION_RESPONSE',
                coords: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                }
              }, event.origin);
            }
          },
          (error) => {
            // Send error back to iframe
            if (iframeRef.current?.contentWindow) {
              iframeRef.current.contentWindow.postMessage({
                type: 'LOCATION_ERROR',
                error: error.message
              }, event.origin);
            }
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        );
      }
    };

    // Add message listener
    window.addEventListener('message', handleMessage);

    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[80vh]">
        <iframe
          ref={iframeRef}
          src="https://web.getsquire.com/book/fadez-factory-on-demand-barbers-rockledge?platform=widget&gclid=null"
          className="w-full h-full border-none"
          title="Book Appointment"
          allow="geolocation"
        />
      </DialogContent>
    </Dialog>
  );
}