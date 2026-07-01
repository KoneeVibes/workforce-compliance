import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#F0EDE6] px-4 py-8">
      <div className="max-w-6xl mx-auto bg-[#1B412A] rounded-3xl px-8 md:px-12 py-10 flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left */}
          <div className="flex flex-col gap-4 max-w-sm">
            <p className="text-sm text-white/50 leading-relaxed">
              Subscribe to our research updates and weekly insight notes on
              workforce compliance in high-risk industries.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#B8EE2C]" />
              </div>
              <span className="font-semibold text-white text-sm">
                Workforce Compliance
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Trust infrastructure for workforce certifications. Built first for
              Nigeria's high-risk industries, designed to scale across Africa.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">
            {/* Email Subscribe */}
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
              <input
                type="email"
                placeholder="Your work email"
                className="w-80 bg-transparent text-sm text-white placeholder:text-white/30 outline-none flex-1 min-w-0"
              />
              <button className="bg-[#B8EE2C] text-[#1a1a1a] font-semibold text-sm px-2 md:px-5 py-2 rounded-full hover:bg-[#99c800] transition-colors shrink-0">
                Subscribe
              </button>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">
                Company
              </span>
              {["About", "Whitepaper", "Contact", "Careers"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-white/30">
            © 2026 Workforce Compliance. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
