import React, { useState } from "react";
import {
  Leaf,
  Clock,
  Award,
  ShieldCheck,
  LineChart,
  Users,
  Zap,
  CalendarCheck,
} from "lucide-react";
import heroImage from "@/assets/hotel-hero.jpg"; // ensure this path exists

// --- CONSTANTS ---
const PRIMARY_COLOR = "#38a169";


// --- TYPE DEFINITIONS ---
interface HotelFormData {
  hotelName: string;
  yourName: string;
  email: string;
  contact: string;
  address: string;
  requirements?: string;
  frequency: string;
}

// --- CUSTOM COMPONENTS ---
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  size = "md",
  className = "",
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 ${className}`}
  >
    {children}
  </button>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`shadow-md border border-gray-100 bg-white rounded-xl ${className}`}>
    {children}
  </div>
);

// --- HOTEL BENEFITS DATA ---
interface HotelBenefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const hotelBenefits: HotelBenefit[] = [
  {
    icon: ShieldCheck,
    title: "Standardized Quality Control",
    description:
      "Eliminate inconsistent quality. Fresh Bags ensures professional grading and hygienic handling of all produce.",
  },
  {
    icon: Users,
    title: "Single-Source Vendor (HoReCa)",
    description:
      "Simplify procurement and reduce management overhead by relying on one reliable, centralized supplier.",
  },
  {
    icon: LineChart,
    title: "Stable Contract Pricing",
    description:
      "Benefit from contract pricing and market insights, shielding your budget from price volatility.",
  },
  {
    icon: Clock,
    title: "On-Time, Scheduled Delivery",
    description:
      "Ensure your kitchen runs smoothly with reliable daily supply and coordinated, trackable logistics.",
  },
  {
    icon: Zap,
    title: "Digital Transparency & Tracking",
    description:
      "Gain full accountability with digital billing, online order management, and farm-to-hotel traceability.",
  },
  {
    icon: CalendarCheck,
    title: "Sustainability & Farmer Impact",
    description:
      "Strengthen your brand by directly supporting local farmers and promoting sustainable supply chain practices.",
  },
];

// --- MAIN COMPONENT ---
const Hotels: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // --- Type-safe extraction of expected fields ---
    const data: HotelFormData = {
      hotelName: (formData.get("hotelName") as string) ?? "",
      yourName: (formData.get("yourName") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      contact: (formData.get("contact") as string) ?? "",
      address: (formData.get("address") as string) ?? "",
      requirements: (formData.get("requirements") as string) ?? "",
      frequency: (formData.get("frequency") as string) ?? "",
    };

    // If you want to validate required fields before submission, you can add checks here
    if (!data.hotelName || !data.yourName || !data.email || !data.contact || !data.address || !data.frequency) {
      setSubmissionStatus("error");
      console.warn("Missing required fields", data);
      return;
    }

    console.log("Hotel Partner Form Submitted:", data);

    // Simulate success UI state
    setSubmissionStatus("success");
    e.currentTarget.reset();
    setTimeout(() => setSubmissionStatus("idle"), 5000);
  };

  const formInputStyles =
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38a169] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500";
  const formLabelStyles = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.9)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Premium Produce for HoReCa Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Fresh Bags simplifies B2B procurement, delivering premium-quality, graded fruits and
            vegetables directly to hoteliers.
          </p>
          <a href="#partner-form">

            <Button className="bg-white hover:bg-gray-100 shadow-lg text-lg px-8 text-[#1FAE3D]">
              Start Your Supply Today
            </Button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#38a169]">Fresh Bags Solves Your HoReCa Procurement Problems</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Addressing inconsistent quality, reliance on multiple vendors, and unpredictable prices with one integrated solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelBenefits.map((item, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#38a169] transition-all duration-300 hover:shadow-lg">
                <div className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-full bg-[#38a169]/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-[#38a169]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form Section */}
      <section id="partner-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#38a169]">Join the Fresh Bags Supply Chain</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Fill out the form below to initiate your partnership. We focus on Tier-II & III hoteliers seeking consistency and reliability.
            </p>
          </div>

          {submissionStatus === "success" && (
            <div className="max-w-4xl mx-auto mb-8 p-4 bg-green-50 border border-green-300 text-green-700 rounded-lg shadow-sm">
              <p className="font-semibold text-center">✅ Thank you! Your Fresh Bags partnership request has been submitted. We will contact your procurement team shortly.</p>
            </div>
          )}

          {submissionStatus === "error" && (
            <div className="max-w-4xl mx-auto mb-8 p-4 bg-red-50 border border-red-300 text-red-700 rounded-lg shadow-sm">
              <p className="font-semibold text-center">⚠️ Please fill all required fields before submitting.</p>
            </div>
          )}

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-200">
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="hotelName" className={formLabelStyles}>Hotel / Business Name</label>
                <input type="text" id="hotelName" name="hotelName" className={formInputStyles} required />
              </div>
              <div>
                <label htmlFor="yourName" className={formLabelStyles}>Your Name (Procurement/Chef)</label>
                <input type="text" id="yourName" name="yourName" className={formInputStyles} required />
              </div>
              <div>
                <label htmlFor="email" className={formLabelStyles}>Email Address</label>
                <input type="email" id="email" name="email" className={formInputStyles} required />
              </div>
              <div>
                <label htmlFor="contact" className={formLabelStyles}>Contact Number</label>
                <input type="tel" id="contact" name="contact" className={formInputStyles} required />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className={formLabelStyles}>Hotel Address</label>
                <textarea id="address" name="address" rows={3} className={formInputStyles} required></textarea>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="requirements" className={formLabelStyles}>Primary Produce Needs (e.g., Daily volume of Greens, Potatoes, Tomatoes)</label>
                <textarea id="requirements" name="requirements" rows={4} className={formInputStyles}></textarea>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="frequency" className={formLabelStyles}>Typical Order Frequency</label>
                <select id="frequency" name="frequency" className={formInputStyles} required>
                  <option value="">Select frequency...</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="one-time">One-time / As needed</option>
                </select>
              </div>
              <div className="md:col-span-2 text-center mt-4">

                <Button
                  type="submit"
                  className="px-10 py-4 text-lg bg-[#38a169] hover:bg-[#38a169] shadow-glow text-white transition"
                >
                  Submit Partnership Request
                </Button>

              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: PRIMARY_COLOR }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Leading Hotel Partners</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Fresh Bags supports the kitchens of <strong>Sarovar</strong>, <strong>Barbeque Nation</strong>, <strong>Golden Tulip</strong>, and many more in Tier-II and Tier-III cities.
          </p>
          <a href="#partner-form">
            <Button size="lg" className="bg-white text-[#38a169] hover:bg-white/90 text-lg px-8 shadow-2xl">
              Get Reliable Supply Today
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hotels;
