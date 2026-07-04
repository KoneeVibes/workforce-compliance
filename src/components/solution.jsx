import registry from "../assets/centralizedRegistry.svg";
import instant from "../assets/instantVerification.svg";
import legacy from "../assets/legacyMigration.svg";
import compliance from "../assets/complianceMonitoring.svg";
const Solution = () => {
	const features = [
		{
			icon: registry,
			title: "Centralized registry",
			description:
				"One digital credential ledger spanning every certification issuer in your industry.",
		},
		{
			icon: instant,
			title: "Instant verification",
			description:
				"Sub-second lookup against the source of truth - by name, badge or QR scan.",
		},
		{
			icon: legacy,
			title: "Legacy migration",
			description:
				"We digitize and onboard decades of paper records from training institutes.",
		},
		{
			icon: compliance,
			title: "Compliance monitoring",
			description:
				"Expiry alerts, audit trails and dashboards built for HSE and regulator reporting.",
		},
	];

	return (
		<div id="solution" className="bg-[#F0EDE6] px-4 py-8">
			<div className="max-w-[1280px] mx-auto bg-[#1B412A] rounded-3xl px-8 md:px-14 py-14 flex flex-col gap-10">
				{/* Header */}
				<div className="flex flex-col gap-6 ">
					<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 w-fit">
						<span className="w-2 h-2 rounded-full bg-[#B8EE2C]" />
						The Solution
					</span>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F9F5E6] leading-tight max-w-2xl">
						A single platform connecting regulators, operators, trainers and
						certification bodies.
					</h2>
				</div>

				{/* Feature Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{features.map((item) => (
						<div
							key={item.title}
							className="bg-white/10 rounded-2xl p-6 flex flex-col gap-3"
						>
							<img src={item.icon} className="w-6 h-6" />
							<h3 className="text-sm font-semibold text-white">{item.title}</h3>
							<p className="text-xs text-white/60 leading-relaxed">
								{item.description}
							</p>
						</div>
					))}
				</div>

				{/* Footer Note */}
				<p className="text-xs text-white/40 leading-relaxed max-w-xl">
					Workforce Compliance integrates with issuers via APIs, secure database
					connections, managed uploads or recurring structured imports - meeting
					institutes where they are today.
				</p>
			</div>
		</div>
	);
};

export default Solution;
