import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "John D.",
    rating: 5,
    text: "Best fade in town! The attention to detail is unmatched.",
    date: "2 weeks ago"
  },
  {
    name: "Mike R.",
    rating: 5,
    text: "Professional service and amazing results every time.",
    date: "1 month ago"
  },
  {
    name: "Chris B.",
    rating: 5,
    text: "Great atmosphere and even better haircuts. Highly recommended!",
    date: "3 weeks ago"
  }
];

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1706087467412-993607b6a390",
      alt: "Professional haircut style 1"
    },
    {
      url: "https://images.unsplash.com/photo-1706087476924-6c0ae4839556",
      alt: "Professional haircut style 2"
    },
    {
      url: "https://images.unsplash.com/photo-1706087467451-5b8650301c17",
      alt: "Professional haircut style 3"
    },
    {
      url: "https://images.unsplash.com/photo-1464750329548-977f9793ca3e",
      alt: "Professional haircut style 4"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Gallery</span>
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
              className="aspect-square overflow-hidden rounded-lg group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer <span className="text-primary">Reviews</span>
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