import { Check, Star, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const packages = [
  {
    name: "Paraat Groepakket",
    price: "€1.200",
    description: "Perfect voor wie op zijn eigen tempo wil leren",
    features: [
      "20 rijlessen (60 minuten)",
      "Praktijkexamen",
      "Vaste instructeur",
      "Persoonlijke aandacht",
      "Betalen in termijnen",
    ],
    popular: false,
  },
  {
    name: "Paraat Premiumpakket",
    price: "€1.875",
    description: "De meest gekozen optie voor succesvol rijden",
    features: [
      "30 rijlessen (60 minuten)",
      "Inclusief praktijkexamen",
      "Inclusief tussentijdse toets",
      "Vaste instructeur",
      "Persoonlijke aandacht",
      "Betalen in termijnen",
    ],
    popular: true,
  },
  {
    name: "Paraat All-in Pakket",
    price: "€2.350",
    description: "Alles wat je nodig hebt in één compleet pakket",
    features: [
      "40 rijlessen (60 minuten)",
      "Inclusief praktijkexamen",
      "Inclusief tussentijdse toets",
      "Vaste instructeur",
      "Persoonlijke aandacht",
      "Betalen in termijnen",
    ],
    popular: false,
  },
];

const additionalServices = [
  {
    name: "Losse les",
    price: "€52,50",
    description: "60 minuten",
  },
  {
    name: "Praktijkexamen",
    price: "€250",
    description: "Bij het afnemen van een lespakket is het praktijkexamen gratis.",
  },
  {
    name: "Tussentijdse toets",
    price: "€200",
    description: "",
  },
  {
    name: "Proefles",
    price: "Gratis",
    description: "Proefles is gratis bij het afnemen van lessen.",
  },
];

export function Packages() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-32 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <span className="text-emerald-700">Onze Pakketten</span>
          </div>
          <h2 className="text-gray-900 mb-4 text-4xl md:text-5xl">
            Kies het pakket dat bij jou past
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Bij Rijschool Paraat bieden wij verschillende pakketten aan die perfect passen bij jouw wensen en budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                pkg.popular
                  ? "border-emerald-500 scale-105 md:scale-110"
                  : "border-gray-100 hover:border-emerald-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-white" />
                  <span>Meest populair</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-gray-900 mb-2 text-2xl">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl text-emerald-600">{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full ${
                  pkg.popular
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                {pkg.popular && <Sparkles className="w-4 h-4 mr-2" />}
                Kies dit pakket
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Niet zeker welk pakket bij je past?{" "}
            <button
              onClick={scrollToContact}
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              Neem contact met ons op
            </button>{" "}
            voor persoonlijk advies.
          </p>
        </div>

        {/* Additional Services */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="text-emerald-700">Overige diensten</span>
            </div>
            <h2 className="text-gray-900 mb-4 text-4xl md:text-5xl">
              Losse diensten en opties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Naast onze pakketten bieden we ook losse lessen en andere diensten aan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              >
                <div className="text-center">
                  <h3 className="text-gray-900 mb-2 text-xl">{service.name}</h3>
                  <div className="mb-3">
                    <span className={`text-3xl ${service.price === "Gratis" ? "text-emerald-600" : "text-gray-900"}`}>
                      {service.price}
                    </span>
                  </div>
                  {service.description && (
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}