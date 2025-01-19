import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

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
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <a href="/" className="block transition-transform hover:scale-105">
              <Logo className="w-40 md:w-48" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#a39e87] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://web.getsquire.com/book/fadez-factory-on-demand-barbers-rockledge"
              onClick={handleBookingClick}
            >
              <Button className="bg-[#a39e87] hover:bg-[#a39e87]/90 text-black">
                Book Now
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-300 hover:text-[#a39e87] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <a
                  href="https://web.getsquire.com/book/fadez-factory-on-demand-barbers-rockledge"
                  onClick={(e) => {
                    handleBookingClick(e);
                    setIsOpen(false);
                  }}
                  className="block w-full"
                >
                  <Button className="w-full bg-[#a39e87] hover:bg-[#a39e87]/90 text-black">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}