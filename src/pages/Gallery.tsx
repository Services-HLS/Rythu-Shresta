import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  // ✅ Images from /public/images
  const galleryImages = [
    { id: 1, image: "/images/slide1.jpg" },
    { id: 2, image: "/images/slide2.jpg" },
    { id: 3, image: "/images/slide3.jpg" },
    { id: 4, image: "/images/slide4.jpg" },
    { id: 5, image: "/images/slide5.jpg" },
    { id: 6, image: "/images/slide6.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = galleryImages.length;

  // ✅ Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [totalImages]);

  // ✅ Manual navigation
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  // ✅ Adjusted card size (smaller height)
  const IMAGE_HEIGHT_CLASS = "h-[320px] md:h-[400px]";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative py-5 bg-gradient-to-br from-[#E8F7EE] to-[#D4F2E2] text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1FAE3D]">
            Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our journey of empowering farmers and connecting them with
            the future of agriculture.
          </p>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-14 relative flex justify-center items-center">
        <div
          className={`relative w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl bg-white ${IMAGE_HEIGHT_CLASS}`}
        >
          {/* ✅ Image Fade Transition */}
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}

          {/* ✅ Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/80 hover:bg-white/95 text-gray-800 rounded-full p-2.5 transition z-20 shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/80 hover:bg-white/95 text-gray-800 rounded-full p-2.5 transition z-20 shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* ✅ Dots Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition ${
                  currentIndex === index
                    ? "bg-[#1FAE3D]"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
