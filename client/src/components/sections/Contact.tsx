import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Style Street, Fashion District, NY 10001",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 9AM-8PM\nSunday: 10AM-6PM",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
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
            Get in <span className="text-primary">Touch</span>
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
              <info.icon className="w-8 h-8 mx-auto text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-400 whitespace-pre-line">{info.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248784!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645890124663!5m2!1sen!2s"
            className="w-full h-[400px] rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
