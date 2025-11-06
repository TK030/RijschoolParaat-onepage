import { UserCheck, GraduationCap, CreditCard, Euro } from "lucide-react";

const usps = [
  {
    icon: UserCheck,
    title: "Persoonlijke aandacht",
    description: "Bij Rijschool Paraat krijg je de persoonlijke aandacht die je nodig hebt om met vertrouwen de weg op te gaan.",
  },
  {
    icon: GraduationCap,
    title: "Vaste instructeur",
    description: "Leer van een vaste instructeur die jouw sterke en zwakke punten kent en jou begeleidt naar een effectieve rijervaring.",
  },
  {
    icon: CreditCard,
    title: "Betalen in termijnen",
    description: "Je kunt de kosten van je rijlessen eenvoudig in termijnen betalen. Geen grote investeringen vooraf!",
  },
  {
    icon: Euro,
    title: "Betaalbare rijlessen",
    description: "Bij Rijschool Paraat vind je betaalbare prijzen zonder te bezuinigen op de kwaliteit van de lessen.",
  },
];

export function USPs() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3">{usp.title}</h3>
                <p className="text-gray-600">{usp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}