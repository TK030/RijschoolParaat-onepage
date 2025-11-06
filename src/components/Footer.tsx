import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "figma:asset/ee1618391173c5277831c2fed24bd7f93471c738.png";

const footerLinks = {
  sitemap: [
    { name: "Home", href: "#home" },
    { name: "Over ons", href: "#about" },
    { name: "Tarieven", href: "#packages" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Algemene voorwaarden", href: "#" },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Rijschool Paraat" 
                className="h-10 brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Jouw betrouwbare rijschool in Utrecht voor persoonlijke rijlessen met vaste instructeurs.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-white mb-4">Sitemap</h4>
            <ul className="space-y-3">
              {footerLinks.sitemap.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4">Juridisch</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Utrecht en omgeving</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+31612345678" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  +31 (0)6 12345678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@rijschoolparaat.nl" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  info@rijschoolparaat.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Rijschool Paraat. Alle rechten voorbehouden.
            </p>
            <p className="text-gray-400 text-sm">
              Gerealiseerd door{" "}
              <a href="#" className="text-emerald-400 hover:text-emerald-300">
                Taha Karaman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}