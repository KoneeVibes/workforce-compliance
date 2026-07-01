import { useState } from "react";

const faqs = [
  {
    question:
      "How does Workforce Compliance connect with existing training institutes?",
    answer:
      "Through APIs, secure database connections, managed CSV uploads, or recurring structured imports — whichever fits the issuer's maturity.",
  },
  {
    question: "Who can verify a worker's credentials?",
    answer:
      "Any authorized operator, contractor, or regulator on the platform can instantly verify a worker's credentials by name, badge ID, or QR scan.",
  },
  {
    question: "What about historical paper certificates?",
    answer:
      "We digitize and onboard decades of paper records from training institutes, making them searchable and verifiable on the platform.",
  },
  {
    question: "Is this only for oil & gas?",
    answer:
      "No — while oil & gas is our primary focus, the platform is built for any high-risk industry including construction, energy, maritime, aviation, and defence.",
  },
  {
    question: "How is regulatory compliance handled?",
    answer:
      "The platform includes expiry alerts, audit trails, and dashboards built specifically for HSE and regulator reporting requirements.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div id="faq" className="bg-[#F0EDE6] px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
            Frequently Asked
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1B412A]">
            Questions, answered.
          </h2>
        </div>

        {/* Accordion */}
        <div className="w-full max-w-2xl flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/60 border border-[#1a1a1a]/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="text-sm font-medium text-[#1B412A]">
                  {faq.question}
                </span>
                <span className="w-7 h-7 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center text-[#1B412A] shrink-0 text-lg">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
