import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "634 Barnes Blvd Suite 104\nRockledge, FL 32955",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon: 9AM-5PM\nTues-Fri: 10AM-6PM\nSat-Sun: 10AM-5PM",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(321) 305-4565",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@fadezfactory.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-[#a39e87]">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visit us today or get in touch to book your appointment. Walk-ins are
            welcome, but appointments are preferred.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="text-center p-6 bg-gray-900 rounded-lg"
            >
              <info.icon className="w-8 h-8 mx-auto text-[#a39e87] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-400 whitespace-pre-line">{info.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.0374286287473!2d-80.7254611!3d28.3297842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de0558d7a8a0d1%3A0x3c42c0c0a7c83a88!2s634%20Barnes%20Blvd%20Suite%20104%2C%20Rockledge%2C%20FL%2032955!5e0!3m2!1sen!2sus!4v1706841600000!5m2!1sen!2sus"
            className="w-full h-[400px] rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}