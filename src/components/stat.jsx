import banner from "../assets/banner.svg";
// import arrow from "../assets/arrow.svg";

const Stats = () => {
	const stats = [
		{ value: "600+", label: "Training providers in scope" },
		{ value: "$1Bn+", label: "In contractor compliance spend" },
		{ value: "90%", label: "Of verifications still manual" },
		{ value: ">90", label: "Days average onboarding delay" },
	];

	return (
		<div className="bg-[#F0EDE6] px-4 py-8">
			<div className="max-w-[1280px] mx-auto flex flex-col gap-8">
				{/* Stats Row */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{stats.map((stat) => (
						<div key={stat.label} className="flex flex-col gap-1">
							<span className="text-4xl sm:text-5xl font-medium text-[#1B412A]">
								{stat.value}
							</span>
							<span className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
								{stat.label}
							</span>
						</div>
					))}
				</div>

				{/* Image with Overlay */}
				<div className="relative rounded-3xl overflow-hidden min-h-[380px]">
					<img
						src={banner}
						alt="workforce"
						className="absolute inset-0 w-full h-full object-cover"
					/>

					{/* Overlay */}
					<div className="absolute inset-0 bg-black/30" />

					{/* Bottom Text */}
					<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
						<h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight max-w-md">
							Helping high risk industries scale their workforce{" "}
							<span className="text-[#B8EE2C]">with confidence.</span>
						</h3>
						{/* <button className="flex items-center gap-2 bg-[#B8EE2C] text-[#1a1a1a] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#99c800] transition-colors shrink-0">
							See approach
							<img src={arrow} className="w-5 h-5" />
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
