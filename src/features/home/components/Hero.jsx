import React, { useState, useEffect } from "react";
import { heroSlides } from "../../../data/homeData";

const Hero = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = heroSlides;

  // Slower Auto Slide (6 seconds stay)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full bg-gray-200 p-1">
      <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full">

          {/* IMAGE SECTION */}
          <div className="w-full lg:w-[80%] relative overflow-hidden bg-black">

            {/* Responsive Height */}
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[450px] lg:h-[600px] xl:h-[650px]">

              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                    }`}
                >
                  {/* Image Wrapper for Smooth Zoom */}
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "low"}
                      className="
                        w-full 
                        h-full 
                        object-fit
                        object-fit
                        transition-transform 
                        duration-[4000ms] 
                        ease-in-out 
                        hover:scale-105
                        block
                      "
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* TEXT SECTION - NO CHANGE */}
          <div className="w-full lg:w-[20%] bg-custom-green text-white relative min-h-[350px] lg:min-h-full flex items-center p-8">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-[2500ms] ease-in-out ${index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                    }`}
                >
                  <span className="uppercase tracking-[0.3em] text-[10px] font-semibold text-white/80 mb-3 block">
                    University Portal
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h2>

                  <div className="w-10 h-1 bg-white mb-5 rounded-full"></div>

                  <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6">
                    {slide.description}
                  </p>

                  <div>
                    <button className="inline-flex items-center justify-center bg-white text-custom-green px-6 py-3 rounded-md font-bold uppercase tracking-widest text-[10px] shadow-md hover:opacity-90 transition-opacity duration-300">
                      Explore More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default Hero;  