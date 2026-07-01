import heroBg from "../assets/heroImage.svg";

const Results = () => {
  return (
    <div className="bg-[#F0EDE6] px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left - Image with quote */}
        <div className="relative rounded-3xl overflow-hidden min-h-[380px]">
          <img
            src={heroBg}
            alt="pilot"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5">
              <p className="text-xs md:text-sm text-[#1a1a1a] leading-relaxed mb-2">
                "We used to spend three weeks confirming that a contractor's
                welders were actually certified. With workforce compliance, our
                HSE team gets a green light in seconds."
              </p>
              <span className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
                Compliance Lead · Upstream Operator
              </span>
            </div>
          </div>
        </div>

        {/* Right - Lime green card */}
        <div className="bg-[#B8EE2C] rounded-3xl p-8 flex flex-col justify-between min-h-[380px]">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#1B412A] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#1a1a1a]/40" />
              Pilot Results
            </span>
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#1B412A] leading-tight">
              Faster onboarding, fewer forged credentials, full audit trail.
            </h3>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-5xl font-bold text-[#1B412A]">14×</span>
            <p className="text-sm text-[#1B412A]/70">
              Faster contractor onboarding observed in early access pilots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
