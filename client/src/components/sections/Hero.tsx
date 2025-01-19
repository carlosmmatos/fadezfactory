import { Button } from "@/components/ui/button";
import React from 'react';

export default function Hero() {
  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const width = 500;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const popup = window.open(
      "https://web.getsquire.com/book/fadez-factory-on-demand-barbers-rockledge",
      "BookAppointment",
      `popup=yes,width=${width},height=${height},top=${top},left=${left}`
    );

    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      window.location.href = "https://web.getsquire.com/book/fadez-factory-on-demand-barbers-rockledge";
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/FadezPhotoBack.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Premium Cuts</span>
          <br />
          <span className="text-[#a39e87]">Exceptional Style</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the art of precision grooming at FADEZ FACTORY. 
          Where style meets sophistication in every cut.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://web.getsquire.com/book/fadez-factory-on-demand-barbers-rockledge"
            onClick={handleBookingClick}
          >
            <Button 
              size="lg" 
              className="bg-[#a39e87] hover:bg-[#a39e87]/90 text-black text-lg"
            >
              Book Appointment
            </Button>
          </a>
          <Button 
            size="lg" 
            variant="outline"
            className="border-[#a39e87] text-[#a39e87] hover:bg-[#a39e87]/10"
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