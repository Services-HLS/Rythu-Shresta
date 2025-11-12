import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1. Rythu Shreshta Brand Section (Now Column 1) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                <img
                  src="./images/logo.png"
                  alt="Rythu Shreshta Logo"
                />
              </div>
              <span
                className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-700 text-transparent bg-clip-text"
              >
                Rythu Shreshta
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering farmers with technology and market access.
            </p>
            
            {/* Rythu Shreshta Social Links */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.linkedin.com/company/rythu-shreshta/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Rythu Shreshta LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/rythushreshta/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Fresh Bags Instagram"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* 2. Fresh Bags Brand Section (Now Column 2) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                <img
                  src="./images/fresh.png"
                  alt="Fresh Bags Logo"
                />
              </div>
              <span className="text-lg md:text-xl font-bold">
                <span className="text-green-600">Fresh</span>
                <span className="text-red-600">Bags</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting hotels and businesses with fresh, sustainable produce.
            </p>

            {/* Fresh Bags Social Links */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.linkedin.com/company/freshbagsofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Fresh Bags LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/freshbagsofficial/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Fresh Bags Instagram"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://www.facebook.com/freshbagsofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Fresh Bags Facebook"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* 3. Quick Links (Now Column 3) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/farmer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Farmer
                </Link>
              </li>
              <li>
                <Link to="/horeca" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Horeca
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Info (Now Column 4) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-600">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span> Startup Incubation Hub, Tirupati Airport Rd, Near Celkon Company, Renigunta, Andhra Pradesh - 517520</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+91 9566811186<br />
                      +91 9566280016</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>admin@pricetym.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator: Needed if we remove border-t from the bar below */}
        <div className="mt-12 border-t border-secondary/50" />

      </div>

      {/* Bottom Bar - MODIFIED: Removed inner border-t and moved padding to container */}
      <div 
        className="bg-green-600" // Apply green background to the full width
      >
        <div 
            className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-white space-y-4 md:space-y-0"
        >
            <p>© 2024 Rythu Shreshta. All rights reserved.</p>

            <div className="flex items-center gap-2">
                <span>Powered by:</span>
                <img
                src="/images/HLS.png"
                alt="Hithlaksh Solutions Logo"
                className="h-10 w-auto"
                />
                Hithlaksh Solutions Private Limited
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;