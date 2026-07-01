import heroBg from "../assets/heroimage.svg";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#F0EDE6] px-4 py-4">
      <div className="relative max-w-[1280px] mx-auto rounded-3xl overflow-hidden min-h-[85vh]">
        {/* Background Image */}
        <img
          src={heroBg}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full min-h-[85vh] px-6 sm:px-10 md:px-14 py-16 sm:py-20">
          {/* Heading */}
          <h1 className="text-[36px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-normal leading-[1em] lg:leading-[68.4px] tracking-[-1.44px] text-white max-w-[672px]">
            Trust Every <span className="text-[#B8EE2C]">Certification.</span>
            <br />
            Verify Every Worker.
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-sm sm:text-base max-w-md leading-relaxed">
            A centralized verification and workforce compliance platform built
            for the high-risk industries that can't afford a forged credential.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("connect")}
              className="flex items-center gap-2 bg-[#B8EE2C] text-black text-sm px-5 py-2.5 rounded-full hover:bg-[#A3D426] transition-colors cursor-pointer"
            >
              Request Early Access
              <img src={arrow} className="w-5 h-5" />
            </button>
            <button className="text-white text-sm font-medium hover:opacity-70 transition-opacity px-4 py-2 border border-white/30 rounded-full">
              See how it works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
