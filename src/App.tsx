import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { USPs } from "./components/USPs";
import { About } from "./components/About";
import { Packages } from "./components/Packages";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <USPs />
        <About />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
