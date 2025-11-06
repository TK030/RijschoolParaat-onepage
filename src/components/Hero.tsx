import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToPackages = () => {
    const element = document.querySelector("#packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1662114807919-ce048d2ea7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xrc3dhZ2VuJTIwcG9sbyUyMHdoaXRlJTIwY2FyfGVufDF8fHx8MTc2MjMzNTMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Rijschool Paraat auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
            <span className="text-emerald-300">✓ Persoonlijke aandacht & vaste instructeur</span>
          </div>
          
          <h1 className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl">
            Jouw rijbewijs,<br />
            <span className="text-emerald-400">binnen handbereik</span>
          </h1>
          
          <p className="text-gray-200 mb-8 text-lg md:text-xl max-w-2xl">
            Op zoek naar een rijschool in Utrecht waar je snel en op korte termijn je rijbewijs kunt halen? 
            Bij Rijschool Paraat krijg je persoonlijke begeleiding van een vaste instructeur. Start vandaag nog met jouw rijlessen!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToPackages}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              Bekijk pakketten
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Neem contact op
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-emerald-400 mb-1 text-3xl md:text-4xl">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Geslaagden</div>
            </div>
            <div>
              <div className="text-emerald-400 mb-1 text-3xl md:text-4xl">15+</div>
              <div className="text-gray-300 text-sm md:text-base">Jaar ervaring</div>
            </div>
            <div>
              <div className="text-emerald-400 mb-1 text-3xl md:text-4xl">4.9★</div>
              <div className="text-gray-300 text-sm md:text-base">Gemiddeld cijfer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}