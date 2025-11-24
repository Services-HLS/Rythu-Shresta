import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/farmer", label: "Farmer" },
    { path: "/horeca", label: "Horeca" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* --- Left side: Dual brand logos --- */}
          <div className="flex items-center space-x-6">
            {/* Rythu Shreshta */}
            <Link to="/" className="flex items-center space-x-1 group">
              <img
                src="./images/logo.png"
                alt="Rythu Shreshta Logo"
                className="h-12 w-10 transition-all group-hover:scale-110"
              />
              <span
                className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-700 text-transparent bg-clip-text"
              >
                Rythu Shreshta
              </span>
            </Link>

            {/* Divider */}
            <div className="hidden md:block h-6 w-px bg-muted-foreground/40" />

            {/* FreshBags */}
            <Link to="/" className="flex items-center space-x-1 group">
              <img
                src="./images/fresh.png"
                alt="FreshBags Logo"
                className="h-8 w-8 transition-all group-hover:scale-110"
              />
              <span className="text-lg md:text-xl font-bold">
                <span className="text-green-600">Fresh</span>
                <span className="text-red-600">Bags</span>
              </span>

            </Link>
          </div>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={`transition-all focus:outline-none focus:ring-0 active:ring-0 active:outline-none ${isActive(link.path)
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "hover:bg-muted text-foreground"
                    }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-0 active:ring-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* --- Mobile Navigation --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={`w-full justify-start focus:outline-none focus:ring-0 active:ring-0 active:outline-none ${isActive(link.path)
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "hover:bg-muted text-foreground"
                    }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
