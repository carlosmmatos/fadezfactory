import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/ui/booking-dialog";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/FadePreview.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-primary">Premium Cuts</span>
          <br />
          <span className="text-white">Exceptional Style</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the art of precision grooming at FADEZ FACTORY. 
          Where style meets sophistication in every cut.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingDialog>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black text-lg"
            >
              Book Appointment
            </Button>
          </BookingDialog>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}