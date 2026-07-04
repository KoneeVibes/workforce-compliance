import fragmentedRecords from "../assets/fragmentedRecords.svg";
import manualVerification from "../assets/manualVerifications.svg";
import arrow from "../assets/arrow.svg";

const Problem = () => {
	return (
		<div id="problem" className="bg-[#F0EDE6] px-4 py-8">
			<div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
				{/* The Problem */}
				<div className="bg-white rounded-[26px] flex flex-col gap-4 pt-7 px-6 pb-12 h-auto lg:h-[352px]">
					<span className="flex items-center gap-2 text-xs font-semibold text-[#1a1a1a]/50 uppercase tracking-wide">
						<span className="w-2 h-2 rounded-full bg-[#1a1a1a]/40" />
						The Problem
					</span>
					<h3 className="text-xl font-semibold text-[#1a1a1a] leading-snug">
						Fragmented records, slow verification, real safety risk.
					</h3>
					<img
						src={fragmentedRecords}
						alt="the problem"
						className="w-full h-48 object-cover rounded-2xl mt-auto"
					/>
				</div>

				{/* Why Now */}
				<div className="bg-[#B8EE2C] rounded-[26px] flex flex-col gap-4 pt-7 px-6 pb-12 h-auto lg:h-[352px]">
					<span className="flex items-center gap-2 text-xs font-semibold text-[#1a1a1a]/60 uppercase tracking-wide">
						<span className="w-2 h-2 rounded-full bg-[#1a1a1a]/40" />
						Why Now
					</span>
					<h3 className="text-xl font-semibold text-[#1a1a1a] leading-snug">
						Trust layer between issuers, employers and regulators.
					</h3>
					<p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
						One source of truth for every certification - replacing paper
						checks, spreadsheets and weeks of back-and-forth with instant
						verification.
					</p>

					<a
						href="/whitepaper.pdf"
						download="Workforce Compliance-Whitepaper.pdf"
						className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] mt-auto"
					>
						Read the whitepaper
						<img src={arrow} className="w-5 h-5" />
					</a>
				</div>

				{/* Today */}
				<div className="bg-white rounded-[26px] flex flex-col gap-4 pt-7 px-6 pb-12 h-auto lg:h-[352px]">
					<span className="flex items-center gap-2 text-xs font-semibold text-[#1a1a1a]/50 uppercase tracking-wide">
						<span className="w-2 h-2 rounded-full bg-[#1a1a1a]/40" />
						Today
					</span>
					<h3 className="text-xl font-semibold text-[#1a1a1a] leading-snug">
						90%+ of verifications still happen manually across Nigerian oil &
						gas.
					</h3>
					<img
						src={manualVerification}
						alt="today"
						className="w-full h-48 object-cover rounded-2xl mt-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Problem;
