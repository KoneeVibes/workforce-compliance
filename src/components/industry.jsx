import arrow from "../assets/arrow.svg";
const Industries = () => {
	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	const leftIndustries = [
		"Oil & Gas",
		"Construction & EPC",
		"Mining & Heavy Industry",
		"Defence & Security",
	];
	const rightIndustries = [
		"Energy & Power",
		"Maritime & Offshore",
		"Aviation Ground Services",
	];

	return (
		<div id="industries" className="bg-[#F0EDE6] px-4 py-16">
			<div className="max-w-[1280px] mx-auto">
				<div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
					<div className="flex flex-col gap-4">
						<span className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
							Industries
						</span>
						<h2 className="text-4xl sm:text-5xl font-semibold text-[#1B412A] leading-tight max-w-lg">
							Our coverage spans every high-risk industry and credential type.
						</h2>
						<button
							className="mt-4 flex items-center gap-2 bg-[#B8EE2C] text-[#1a1a1a] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#99c800] transition-colors w-fit"
							onClick={() => {
								scrollTo("contact");
							}}
						>
							Talk to us
							<img src={arrow} className="w-5 h-5" />
						</button>
					</div>
					<div className="w-full lg:w-auto flex justify-center">
						<svg viewBox="0 0 400 320" className="w-full max-w-sm">
							{/* Labels */}
							<text
								x="200"
								y="24"
								textAnchor="middle"
								fontSize="10"
								fill="#1a1a1a"
								opacity="0.4"
								letterSpacing="2"
							>
								CERTIFICATION DEPTH
							</text>
							<text
								x="200"
								y="304"
								textAnchor="middle"
								fontSize="10"
								fill="#1a1a1a"
								opacity="0.4"
								letterSpacing="2"
							>
								WORKFORCE VOLUME
							</text>
							<text
								x="30"
								y="165"
								textAnchor="middle"
								fontSize="10"
								fill="#1a1a1a"
								opacity="0.4"
								letterSpacing="2"
							>
								RISK
							</text>
							<text
								x="370"
								y="165"
								textAnchor="middle"
								fontSize="10"
								fill="#1a1a1a"
								opacity="0.4"
								letterSpacing="2"
							>
								SCALE
							</text>

							<circle
								cx="200"
								cy="160"
								r="120"
								fill="none"
								stroke="#1a1a1a"
								strokeOpacity="0.1"
								strokeWidth="1"
							/>

							<circle cx="200" cy="160" r="100" fill="#B8EE2C" opacity="0.7" />

							<circle cx="200" cy="170" r="70" fill="#456b54" />
						</svg>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
					<div>
						{leftIndustries.map((industry, index) => (
							<div
								key={industry}
								className={`flex items-center justify-between py-4 border-t ${index === leftIndustries.length - 1 ? "border-b" : ""} border-[#1a1a1a]/10 group cursor-pointer`}
							>
								<span className="text-sm text-[#1B412A] font-medium">
									{industry}
								</span>
								<span className="text-[#1B412A] opacity-40 group-hover:opacity-100 transition-opacity">
									↗
								</span>
							</div>
						))}
					</div>

					<div>
						{rightIndustries.map((industry, index) => (
							<div
								key={industry}
								className={`flex items-center justify-between py-4 border-t ${index === rightIndustries.length - 1 ? "border-b" : ""} border-[#1a1a1a]/10 group cursor-pointer`}
							>
								<span className="text-sm text-[#1B412A] font-medium">
									{industry}
								</span>
								<span className="text-[#1B412A] opacity-40 group-hover:opacity-100 transition-opacity">
									↗
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Industries;
