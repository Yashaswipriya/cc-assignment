import React from "react";
import Navbar from '@/components/Navbar';

export default function Hero() {
    const logos = [
        "/Logo1.svg",
        "/Logo2.svg",
        "/Logo3.svg",
        "/Logo4.svg",
        "/Logo5.svg",
        "/Logo6.svg",
        "/Logo7.svg",
    ];

    return (
        <div className="min-h-screen bg-[linear-gradient(175deg,#000000_0%,#000000_30%,#9C356D_35%,#F9784C_40%,#FCD68B_45%,#FFFAEF_50%)] lg:bg-[linear-gradient(175deg,#000000_0%,#000000_35%,#9C356D_40%,#F9784C_45%,#FCD68B_50%,#FFFAEF_55%)]">
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col items-start gap-10 px-6 md:px-14 py-16 md:py-24 relative">
                <div className="inline-flex flex-col items-start gap-6">
                    <p className="w-full md:w-80 font-semibold text-white text-lg sm:text-xl">
                        👋 HEY, I AM ERICA
                    </p>
                    <p className="text-4xl sm:text-5xl md:text-7xl font-medium bg-[linear-gradient(176deg,rgba(254,250,238,1)_0%,rgba(252,214,139,1)_34%,rgba(249,120,76,1)_66%,rgba(156,53,109,1)_94%)] [-webkit-background-clip:text] text-transparent leading-snug">
                        A YOUNG CREATIVE<br className="hidden sm:block" /> DESIGNER BASED IN <br className="hidden sm:block" />SAN DIEGO
                    </p>
                </div>
                <div className="flex flex-row items-center justify-center sm:justify-start sm:gap-6 gap-10 p-10 w-full ml-[-40px]">
                    <button className="px-6 py-3 rounded-full overflow-hidden border border-white text-white">
                        MY WORKS
                    </button>
                    <button className="px-6 py-3 bg-white text-black rounded-full overflow-hidden">
                        LET&apos;S TALK
                    </button>
                </div>
            </div>

            {/* Logo Section */}
            <div className="flex flex-col items-center py-10">
                <div className="flex justify-center items-center gap-8 md:gap-15 w-full px-4">
                    {logos.map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo}
                            alt={`Logo ${idx + 1}`}
                            className="h-6 sm:h-8 object-contain opacity-70"
                        />
                    ))}
                </div>
            </div>
  <div className="h-20 sm:h-32 md:h-40"></div>

           {/* About Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-14 py-16 md:py-20 gap-10 md:gap-20">
              {/* Text */}
              <div className="flex flex-col items-start gap-6 max-w-full lg:max-w-[544px] order-1 lg:order-2">
                  <div className="flex flex-col items-start gap-4">
                      <div className="text-orange-400 text-sm font-medium tracking-wide uppercase">
                          ABOUT
                      </div>
                      <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                          CRAFTING UNIQUE BRAND EXPERIENCES SINCE 2014
                      </h2>
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      With a Visual Arts degree, my journey began in graphic design,
                      crafting logos and marketing materials. Video editing followed,
                      where meticulous attention to detail set my work apart, and I
                      ventured into 3D modeling for immersive experiences.
                  </p>
                  <button className="px-6 py-3 rounded-full border border-black text-black font-medium w-full sm:w-auto">
                      SCHEDULE A CALL
                  </button>
              </div>

              {/* Image */}
              <div className="relative w-[280px] sm:w-[350px] md:w-[496px] h-[420px] sm:h-[600px] md:h-[760px] flex-shrink-0 order-2 lg:order-1">
                  <div
                      className="absolute rounded-[500px] blur-[28px] top-[25px] right-[25px] bottom-[-32px] left-[-32px]"
                      style={{
                          background: "linear-gradient(176deg, rgba(254,250,238,1) 0%, rgba(252,214,139,1) 34%, rgba(249,120,76,1) 66%, rgba(156,53,109,1) 94%)",
                          transform: "translateY(30px)"
                      }}
                  />
                  <img
                      className="w-full h-full object-cover rounded-[500px] relative z-10"
                      alt="About Image"
                      src="/About_image.png"
                  />
              </div>
          </div>
        </div>
    );
}
