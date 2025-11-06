import { useState, useEffect } from "react";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/ee1618391173c5277831c2fed24bd7f93471c738.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Over ons", href: "#about" },
  { name: "Tarieven", href: "#packages" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-[calc(100%-3rem)] max-w-[1200px] ${
        isScrolled
          ? "top-4 shadow-2xl"
          : "top-6 shadow-xl"
      } bg-white/95 backdrop-blur-2xl rounded-2xl border border-white/80`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Rijschool Paraat" 
              className={`h-8 transition-all duration-300 ${
                isScrolled ? "h-7" : "h-8"
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-emerald-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Social & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all rounded-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden transition-colors text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 bg-white/95 backdrop-blur-lg rounded-b-2xl -mx-4 px-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-emerald-600 transition-colors text-left py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-emerald-600 hover:bg-emerald-700 w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}