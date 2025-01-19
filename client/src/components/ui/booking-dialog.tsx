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
      if (event.data === 'requestLocation') {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Send location back to iframe
            if (iframeRef.current) {
              iframeRef.current.contentWindow?.postMessage({
                type: 'location',
                coords: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                }
              }, '*');
            }
          },
          (error) => {
            console.log('Location permission denied or error:', error);
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
          src="https://getsquire.com/booking/brands/1ff67c92-ebf8-4a94-87a0-ab47bc022457?platform=widget&gclid=null"
          className="w-full h-full border-none"
          title="Book Appointment"
          onLoad={() => {
            // Inject script to handle location requests
            if (iframeRef.current?.contentWindow) {
              const script = `
                // Override the geolocation API in the iframe
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition = function(success, error) {
                    // Request location from parent
                    window.parent.postMessage('requestLocation', '*');

                    // Listen for response
                    window.addEventListener('message', function(event) {
                      if (event.data?.type === 'location') {
                        success({
                          coords: event.data.coords
                        });
                      }
                    });
                  };
                }
              `;
              iframeRef.current.contentWindow.eval(script);
            }
          }}
        />
      </DialogContent>
    </Dialog>
  );
}