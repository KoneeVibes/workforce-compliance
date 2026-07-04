import regulators from "../assets/regulators.svg";
import operatorsAndContractors from "../assets/operatorsAndContractors.svg";
import trainingInstitutes from "../assets/training.svg";
import workforcePersonnel from "../assets/workforcePersonnel.svg";
import arrow from "../assets/plainarrow.svg";

const Stakeholders = () => {
	const stakeholders = [
		{
			title: "Regulators",
			description:
				"Real-time oversight of certified personnel and approved training providers - without chasing PDFs.",
			thumbnail: regulators,
		},
		{
			title: "Operators & Contractors",
			description:
				"Confirm every contractor's credentials before they reach site. Cut onboarding from weeks to minutes.",
			thumbnail: operatorsAndContractors,
		},
		{
			title: "Training Institutes",
			description:
				"Issue tamper-proof digital credentials and protect your brand from forged certificates.",
			thumbnail: trainingInstitutes,
		},
		{
			title: "Workforce Personnel",
			description:
				"A single lifelong record of every certification - portable across employers and projects.",
			thumbnail: workforcePersonnel,
		},
	];

	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div id="stakeholders" className="bg-[#F6EEDC] px-4 py-16">
			<div className="max-w-[1280px] mx-auto">
				{/* Header */}
				<div className="flex flex-col items-center text-center mb-12">
					<span className="text-[11px] font-semibold leading-[16.5px] tracking-[2.42px] text-center text-[#1B412A] mb-4">
						STAKEHOLDER BENEFITS
					</span>
					<h2 className="text-[36px] sm:text-[48px] font-normal leading-[1em] sm:leading-[48px] tracking-[-0.96px] text-center text-[#1B412A] max-w-2xl">
						Built for everyone who has a stake in{" "}
						<em className="italic">workforce trust.</em>
					</h2>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
					{stakeholders.map((item) => (
						<div
							key={item.title}
							className="bg-white rounded-[26px] flex flex-col gap-3 pt-3 px-4 pb-5 h-auto lg:h-[416px] overflow-hidden"
						>
							<div className="w-full rounded-[16px] h-48 overflow-hidden">
								<img
									src={item.thumbnail}
									alt={item.title}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex flex-col gap-3 flex-1">
								<h3 className="text-base font-semibold text-[#1B412A]">
									{item.title}
								</h3>
								<p className="text-sm text-[#556159] leading-relaxed">
									{item.description}
								</p>
								<button
									className="mt-auto flex items-center justify-between bg-[#EDE7DB] border border-[#1a1a1a]/10 rounded-full px-4 py-2 text-sm text-[#1a1a1a]  transition-colors"
									onClick={() => scrollTo("contact")}
								>
									Join Wait List
									<img src={arrow} className="w-5 h-5" />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Stakeholders;
