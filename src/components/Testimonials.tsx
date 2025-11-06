import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Lisa van den Berg",
    role: "Geslaagd in 2024",
    content: "Rijschool Paraat heeft mij enorm geholpen! Mijn instructeur was geduldig en professioneel. Binnen 3 maanden had ik mijn rijbewijs. Absoluut een aanrader!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1732067718116-0877f8ec29d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBkcml2ZXJ8ZW58MXx8fHwxNzYyMzM1MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Mohammed Bakri",
    role: "Geslaagd in 2024",
    content: "Super ervaring! De lessen waren duidelijk en de vaste instructeur kende mijn sterke en zwakke punten. Direct in één keer geslaagd!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1732067718116-0877f8ec29d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBkcml2ZXJ8ZW58MXx8fHwxNzYyMzM1MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Emma de Vries",
    role: "Geslaagd in 2024",
    content: "Ik was zenuwachtig om te beginnen, maar mijn instructeur stelde me meteen op mijn gemak. Fijne rijschool met goede begeleiding!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1732067718116-0877f8ec29d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBkcml2ZXJ8ZW58MXx8fHwxNzYyMzM1MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <span className="text-emerald-700">Ervaringen</span>
          </div>
          <h2 className="text-gray-900 mb-4 text-4xl md:text-5xl">
            Wat onze leerlingen zeggen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Lees wat onze geslaagde leerlingen over hun ervaring bij Rijschool Paraat te vertellen hebben.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-emerald-600 mb-4 opacity-50" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-emerald-100">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 rounded-full">
            <Star className="w-5 h-5 fill-emerald-500 text-emerald-500" />
            <span className="text-emerald-700">4.9 uit 5 sterren op basis van 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}