import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BookingDialogProps {
  children: React.ReactNode;
  className?: string;
}

export function BookingDialog({ children, className }: BookingDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[80vh]">
        <iframe
          src="https://getsquire.com/booking/brands/1ff67c92-ebf8-4a94-87a0-ab47bc022457?platform=widget&gclid=null"
          className="w-full h-full border-none"
          title="Book Appointment"
        />
      </DialogContent>
    </Dialog>
  );
}