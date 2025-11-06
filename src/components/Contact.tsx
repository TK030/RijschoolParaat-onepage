import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefoon",
    content: "+31 (0)6 12345678",
    link: "tel:+31612345678",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@rijschoolparaat.nl",
    link: "mailto:info@rijschoolparaat.nl",
  },
  {
    icon: MapPin,
    title: "Locatie",
    content: "Utrecht en omgeving",
    link: "#",
  },
  {
    icon: Clock,
    title: "Openingstijden",
    content: "Ma-Zo: 08:00 - 20:00",
    link: "#",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
            <span className="text-emerald-300">Contact</span>
          </div>
          <h2 className="text-white mb-4 text-4xl md:text-5xl">
            Neem contact met ons op
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Heb je vragen of wil je direct starten? Neem contact met ons op via onderstaand formulier of bel ons direct.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6 text-2xl">Contactgegevens</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors border border-white/10"
                  >
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">{info.title}</div>
                      <div className="text-white">{info.content}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-white mb-4">Of neem direct contact op via</h4>
              <div className="flex gap-3">
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20">
                  <Phone className="w-4 h-4 mr-2" />
                  Bellen
                </Button>
              </div>
              
              <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-gray-900 mb-6 text-2xl">Stuur ons een bericht</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Naam *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Je volledige naam"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="je@email.nl"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefoonnummer
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12345678"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Bericht *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Vertel ons over je wensen en wanneer je wilt starten..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                size="lg"
              >
                Verstuur bericht
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}