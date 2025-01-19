import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Chris C.",
    rating: 5,
    text: "Dustin always takes care of me and gives a consistent, excellent cut at a reasonable price. Can't ask for more. The shop looks great since the new ownership too.",
    date: "2 weeks ago"
  },
  {
    name: "Josh S.",
    rating: 5,
    text: "Best haircut I've had in a while. I booked an appointment online and got my hair cut by Q. It was a phenomenal experience and I normally hate getting my hair cut.",
    date: "1 month ago"
  },
  {
    name: "Leo B.",
    rating: 5,
    text: "My new barber is Dustin. He's fantastic, truly a master at his craft. He knew exactly how to cut my hair for the best look. You get what you pay for: experience + skill. Dustin is my barber from here on out.",
    date: "3 weeks ago"
  }
];

export default function Gallery() {
  const images = [
    {
      url: "/assets/fade-cuts/fade1.svg",
      alt: "Professional fade cut with styled top"
    },
    {
      url: "/assets/fade-cuts/fade2.svg",
      alt: "Precision wave pattern fade cut"
    },
    {
      url: "/assets/fade-cuts/fade3.svg",
      alt: "Clean fade cut with textured top"
    },
    {
      url: "/assets/fade-cuts/fade4.svg",
      alt: "Sharp line up with perfect fade"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#a39e87]">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a look at some of our finest work. We take pride in every cut and
            style we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg group bg-gray-800"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer <span className="text-[#a39e87]">Reviews</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{review.text}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary font-semibold">{review.name}</span>
                  <span className="text-gray-500">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}