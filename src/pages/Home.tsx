import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Sprout,
  Store,
  TrendingUp,
  Users,
  Shield,
  Award,
  Quote,
} from "lucide-react";

// --- CUSTOMER LOGO DATA ---
const customerLogos = [
  // NOTE: Assuming logos are accessible via paths starting from the public directory
  { src: "/images/Taj.png", alt: "TAJ Hotels" },
  { src: "/images/Fortuner.png", alt: "Fortune Hotels" },
  { src: "/images/Sarovar.png", alt: "Sarovar Hotels" },
  { src: "/images/Barbeque.png", alt: "Barbeque Nation" },
  { src: "/images/rebel foods.png", alt: "Rebel Foods Group" },
  { src: "/images/Indian.png", alt: "Indian Culinary Institute" },
  { src: "/images/ekante bliss.png", alt: "Ekante Bliss" },
  { src: "/images/Golden Tulip.png", alt: "Golden Tulip" },
  { src: "/images/Eatn play.png", alt: "Eat n Play" },
];
// --- END CUSTOMer LOGO DATA ---

const testimonials = [
  {
    quote:
      "Rythu Shreshta gave me price stability and guaranteed buyers for each harvest.",
    name: "Ravi Kumar",
    title: "Farmer Partner – Telangana",
  },
  {
    quote:
      "With FreshBags, I finally get consistent quality and timely deliveries for my kitchen.",
    name: "Chef Anita Rao",
    title: "Executive Chef – Bangalore",
  },
  {
    quote:
      "The training and farm-to-hotel network completely changed my income flow.",
    name: "Suresh Reddy",
    title: "Vegetable Grower – Andhra Pradesh",
  },
];

const Home = () => {

  const whatsappNumber = "+919566280096";
  const whatsappMessage = "Hi Urban Milk.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // MODIFIED: Updated image path to reflect the Horeca theme
            backgroundImage: "url('/images/demo.jpg')",
            // MODIFIED: Adjusted brightness filter to make the image less dark, matching the example
            filter: "brightness(0.4)",
          }}
        />
        {/* Adjusted gradient for better contrast at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/20 to-background/70" />
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            India’s First Integrated <br /> Farm-to-Hotel Supply Network
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            From Rythu Shreshta farms to FreshBags hotels a unified
            platform ensuring fair pricing for farmers and fresh, graded produce
            for Horeca buyers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/farmer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-glow text-lg px-8"
              >
                For Farmers – Rythu Shreshta
              </Button>
            </Link>
            <Link to="/horeca">
              <Button
                size="lg"
                variant="default"
                className="bg-white text-primary border-primary hover:bg-white/90 hover:text-primary text-lg px-8 shadow-md"
              >
                For Horeca – FreshBags
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            About Our Agri-Tech Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-primary">Rythu Shreshta</span> and{" "}
            <span className="font-semibold text-primary">FreshBags</span> work hand-in-hand
            to transform India’s fresh-produce supply chain. While Rythu Shreshta
            empowers farmers with training, inputs, and assured procurement,
            FreshBags ensures premium-quality, hygienically handled fruits and
            vegetables reach hotels, restaurants, and institutions every day
            reducing waste, guaranteeing freshness, and building sustainability.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our Integrated Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A smart, transparent, and sustainable link between farmers and Horeca buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sprout className="h-6 w-6 text-primary" />,
                title: "Assured Farm Buy-Back",
                desc: "Rythu Shreshta guarantees every harvest is purchased at fair, pre-agreed prices, eliminating market risk.",
              },
              {
                icon: <Store className="h-6 w-6 text-primary" />,
                title: "Centralized Supply Chain",
                desc: "FreshBags aggregates produce directly from partner farms and delivers daily to hotels and restaurants.",
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
                title: "Fair Pricing & Stable Income",
                desc: "Farmers gain stable income through transparent pricing — buyers enjoy consistent quality and cost control.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Connected Community",
                desc: "A fast-growing network of farmers, agri-experts, and hospitality professionals driving mutual growth.",
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Quality & Traceability",
                desc: "Every batch is graded, hygienically handled, and traceable from farm to delivery point.",
              },
              {
                icon: <Award className="h-6 w-6 text-primary" />,
                title: "Sustainable Practices",
                desc: "Promoting eco-friendly cultivation, soil testing, and efficient logistics to minimize carbon footprint.",
              },
            ].map((f, i) => (
              <Card
                key={i}
                className="border-2 hover:border-primary transition-all hover:shadow-soft"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Customers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our Customers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by the biggest names in the hospitality industry.
            </p>
          </div>

          {/* Logos Grid: 2 columns on small screens, 5 columns on large screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 items-center justify-center max-w-6xl mx-auto">
            {customerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center p-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  // Full color and increased size (max-h-20)
                  className="w-auto max-h-20 h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamless collaboration between Rythu Shreshta and FreshBags in 3 steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Register",
                text: "Farmers join Rythu Shreshta and gain access to training, inputs, and MSP-based assured procurement.",
              },
              {
                step: "2",
                title: "Connect",
                text: "Horeca partners place orders via the FreshBags platform with real-time traceability.",
              },
              {
                step: "3",
                title: "Deliver & Grow",
                text: "FreshBags handles aggregation, cold-chain logistics, and daily delivery linking farms to hotels efficiently.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto shadow-glow">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">
            What Our Partners Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, index) => (
              <Card
                key={index}
                className="border-2 border-primary/10 hover:border-primary/30 transition-all shadow-md hover:shadow-lg bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-6 w-6 text-primary mx-auto" />
                  <p className="text-lg italic text-muted-foreground">
                    “{t.quote}”
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Join the Farm-to-Hotel Revolution Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you grow it or serve it, Rythu Shreshta and FreshBags make fresh business simple, fair, and sustainable.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
            >
              Contact Us to Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* NEW: Sticky WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        // Tailwind classes for sticky positioning
        className="fixed bottom-4 right-2 z-50 p-4 rounded-full bg-green-500 shadow-xl hover:bg-green-600 transition-colors duration-300 transform hover:scale-110"
      >
        <img
          // Using the image path instead of inline SVG
          src="/images/Whatsapp.png"
          alt="WhatsApp Chat"
          // Class to size the image
          className="w-8 h-8 shadow-xl"
        />
      </a>

    </div>
  );
};

export default Home;


