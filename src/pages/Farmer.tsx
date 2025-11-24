import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Shield, TrendingUp, Truck, BookOpen, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/farmer-hero.jpg";

// --- CONSTANTS ---
const LOGO_GREEN = "#1FAE3D";
const LOGO_GREEN_DARK = "#179B33";

// --- INDIAN RUPEE ICON ---
const IndianRupee: React.FC<{ className?: string; color?: string }> = ({
  className = "h-6 w-6",
  color = LOGO_GREEN,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 3h12" />
    <path d="M6 7h12" />
    <path d="M12 7v14" />
    <path d="M16 13l-4 4-4-4" />
  </svg>
);

// --- FEATURE CARD ---
interface FeatureCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  Rupee?: boolean;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  Rupee = false,
  color = LOGO_GREEN,
}) => (
  <Card className="border-2 transition-all hover:shadow-soft hover:border-[#1FAE3D]">
    <CardContent className="p-6 space-y-4">
      <div className="h-12 w-12 rounded-lg bg-[#1FAE3D]/10 flex items-center justify-center">
        {Rupee ? (
          <IndianRupee color={color} />
        ) : (
          <Icon className="h-6 w-6 text-[#1FAE3D]" />
        )}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </CardContent>
  </Card>
);

// --- BENEFITS DATA ---
const farmerBenefits = [
  {
    Icon: IndianRupee,
    title: "Guaranteed MSP & Fixed Prices",
    description:
      "Direct procurement at fair prices protects you from unstable market price fluctuations and exploitation by middlemen.",
    Rupee: true,
  },
  {
    Icon: Shield,
    title: "100% Assured Buy-Back",
    description:
      "Eliminate the risk of unsold produce. We assure the purchase of your entire high-quality harvest, aligning crops with market demand.",
  },
  {
    Icon: Truck,
    title: "Zero-Cost Logistics & Cold Chain",
    description:
      "Receive free or subsidized transportation from your farm to our centralized collection points, reducing your high logistic costs.",
  },
  {
    Icon: Tag,
    title: "Subsidized Input Supplies",
    description:
      "Access farm tools, fertilizers, pesticides, and seeds at exclusive member discounts, overcoming the burden of high input costs.",
  },
  {
    Icon: BookOpen,
    title: "Training & Quality Awareness",
    description:
      "Hands-on field training, agronomy advisory, and scientific soil testing to ensure your produce meets premium quality standards (FreshBags grading).",
  },
  {
    Icon: TrendingUp,
    title: "Direct B2B Market Access",
    description:
      "Gain direct linkage to verified hotel, restaurant, and catering demand (HoReCa), ensuring consistent market access and quick digital payments.",
  },
];

// --- SUPPORT OPTIONS ---
const supportOptions = [
  "Transport",
  "Purchase",
  "Form Equipment",
  "Guidence",
];

// --- MAIN COMPONENT ---
const Farmer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactNo: "",
    email: "",
    supportRequired: [] as string[],
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const formRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      supportRequired: checked
        ? [...prev.supportRequired, value]
        : prev.supportRequired.filter((s) => s !== value),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Farmer Registration Data:", formData);
    setSubmissionStatus("success");
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/20 to-background/70" />
       

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Empower Your Farm with Rythu Shreshta
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            India’s first integrated Agri-Tech platform providing Assured MSP,
            100% Buy-Back, and end-to-end support to protect your income and
            boost productivity.
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-[#1FAE3D] hover:bg-[#179B33] shadow-lg text-lg px-8"
          >
            Farmer Registration
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#38a169]">Solving Farmer Challenges</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We directly address the key issues faced by farmers, from price
              instability and logistics to quality control and input costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmerBenefits.map((benefit) => (
              <FeatureCard
                key={benefit.title}
                Icon={benefit.Icon}
                title={benefit.title}
                description={benefit.description}
                Rupee={benefit.Rupee}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section ref={formRef} id="registration" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#38a169]">
              Farmer Enrollment Application
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Fill out this form to connect with our regional manager and start
              your journey towards sustainable, assured income.
            </p>
          </div>

          {submissionStatus === "success" && (
            <div className="max-w-4xl mx-auto mb-8 p-4 bg-green-50 border border-green-300 text-green-700 rounded-lg shadow-sm flex items-center space-x-3">
              <Shield className="h-6 w-6 flex-shrink-0" />
              <p className="font-semibold">
                ✅ Thank you for registering! We will contact you within 24 hours.
              </p>
            </div>
          )}

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-200">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1FAE3D] focus:border-[#1FAE3D] outline-none"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label
                  htmlFor="contactNo"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Contact Number
                </label>
                <input
                  id="contactNo"
                  name="contactNo"
                  type="tel"
                  placeholder="e.g., 9876543210"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1FAE3D] focus:border-[#1FAE3D] outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1FAE3D] focus:border-[#1FAE3D] outline-none"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Farm / Residence Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1FAE3D] focus:border-[#1FAE3D] outline-none"
                />
              </div>

              {/* Support Required */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-3">
                  Support Required
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {supportOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-3 text-gray-700 cursor-pointer p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={formData.supportRequired.includes(option)}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-[#1FAE3D] border-gray-300 rounded focus:ring-[#1FAE3D] accent-[#1FAE3D]"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center mt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="px-10 py-3 text-lg bg-[#1FAE3D] hover:bg-[#179B33] shadow-lg rounded-lg transition-all text-white w-full md:w-auto"
                >
                  Submit Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Farmer;







