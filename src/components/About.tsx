import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  "Flexibele lestijden aangepast aan jouw schema",
  "Moderne lesauto's met de nieuwste veiligheidsvoorzieningen",
  "Gratis proefles om kennis te maken",
  "Snel je rijbewijs halen met intensieve pakketten",
];

export function About() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwbGVzc29uJTIwY2FyJTIwaW5zdHJ1Y3RvcnxlbnwxfHx8fDE3NjIzMzUzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rijles bij Rijschool Paraat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="text-emerald-700">Over Rijschool Paraat</span>
            </div>
            
            <h2 className="text-gray-900 mb-6 text-4xl md:text-5xl">
              Welkom bij Rijschool Paraat
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Ben je op zoek naar een rijschool in Utrecht en wil je snel of (flexibel) rijden halen? Vraag vandaag 
              nog je gratis proefles aan en ontdek hoe wij jou kunnen helpen jouw rijbewijs te halen!
            </p>

            <p className="text-gray-600 mb-8 text-lg">
              Klaar om de weg op te gaan? Bij Rijschool Paraat bieden wij verschillende pakketten om aan jouw vragen 
              te voldoen. Of je nu een snelcursus zoekt of gewoon per les wilt betalen, bij ons vind je het juiste aanbod. 
              Neem vandaag nog contact met ons op voor meer informatie!
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Plan vandaag nog je proefles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}