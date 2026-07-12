import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import arrow from "../assets/arrow.svg";
// import phone from "../assets/phone.svg";
import connect from "../assets/connect.svg";

const Contact = () => {
	const initialFormDetails = useMemo(() => {
		return {
			fullName: "",
			email: "",
			phone: "",
			role: "",
			organization: "",
			message: "",
			stakeholder: "",
		};
	}, []);

	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [formDetails, setFormDetails] = useState(initialFormDetails);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormDetails((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleContactFormSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setIsLoading(true);
		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formDetails,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);
			alert("Message sent successfully!");
		} catch (error) {
			console.error(error);
			alert("Failed to send message.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div id="contact" className="bg-[#F0EDE6] px-4 py-8">
			<div className="max-w-[1280px] mx-auto bg-white/60 border border-[#1a1a1a]/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
				{/* Left - Form */}
				<div className="p-8 md:p-12 flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<span className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
							Connect With Us
						</span>
						<h2 className="text-4xl font-semibold text-[#1B412A]">
							Let's Connect.
						</h2>
						<p className="text-sm text-[#1a1a1a]/60 leading-relaxed">
							Tell us who you are and we'll prioritize early access by
							stakeholder type. We also book intro calls - link inside the
							confirmation email.
						</p>
					</div>

					{/* Form Fields */}
					<div className="flex flex-col gap-4">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
									Full Name
								</label>
								<input
									name="fullName"
									type="text"
									placeholder="Adaeze Okonkwo"
									value={formDetails.fullName}
									onChange={(e) => handleChange(e)}
									className="bg-[#F9F5ED] border border-[#1a1a1a]/10 rounded-full px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#1a1a1a]/30 transition-colors"
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
									Organization
								</label>
								<input
									name="organization"
									type="text"
									placeholder="NUPRC / Shell / ABC Training"
									value={formDetails.organization}
									onChange={(e) => handleChange(e)}
									className="bg-[#F9F5ED] border border-[#1a1a1a]/10 rounded-full px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#1a1a1a]/30 transition-colors"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
									Role
								</label>
								<input
									name="role"
									type="text"
									placeholder="HSE Lead, Director, Trainer..."
									value={formDetails.role}
									onChange={(e) => handleChange(e)}
									className="bg-[#F9F5ED] border border-[#1a1a1a]/10 rounded-full px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#1a1a1a]/30 transition-colors"
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
									Email
								</label>
								<input
									name="email"
									type="email"
									placeholder="you@company.com"
									value={formDetails.email}
									onChange={(e) => handleChange(e)}
									className="bg-[#F9F5ED] border border-[#1a1a1a]/10 rounded-full px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#1a1a1a]/30 transition-colors"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
									Phone
								</label>
								<input
									name="phone"
									type="tel"
									placeholder="+234 ..."
									value={formDetails.phone}
									onChange={(e) => handleChange(e)}
									className="bg-[#F9F5ED] border border-[#1a1a1a]/10 rounded-full px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#1a1a1a]/30 transition-colors"
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
									Stakeholder Type
								</label>
								<select
									name="stakeholder"
									className="bg-[#F9F5ED] border border-[#1a1a1a]/10 rounded-full px-4 py-3 text-sm text-[#1a1a1a]/40 outline-none focus:border-[#1a1a1a]/30 transition-colors appearance-none"
									value={formDetails.stakeholder}
									onChange={(e) => handleChange(e)}
								>
									<option value="">Select one...</option>
									<option value="regulator">Regulator</option>
									<option value="operator">Operator & Contractor</option>
									<option value="training">Training Institute</option>
									<option value="personnel">Workforce Personnel</option>
								</select>
							</div>
						</div>

						<div className="flex flex-col gap-1">
							<label className="text-xs font-semibold text-[#1a1a1a]/40 uppercase tracking-widest">
								Comments (Optional)
							</label>
							<textarea
								name="message"
								placeholder="Anything we should know about your workforce or compliance setup?"
								rows={4}
								className="bg-[#F9F5ED] border border-[#1a1a1a]/10 rounded-2xl px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#1a1a1a]/30 transition-colors resize-none"
								value={formDetails.message}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>

					{error && (
						<div>
							<p className="text-xs text-[#ff0000]/40 max-w-xs">{error}</p>
						</div>
					)}

					{/* Footer */}
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
						<p className="text-xs text-[#1a1a1a]/40 max-w-xs">
							By submitting, you agree to be contacted about Workforce
							Compilance early access.
						</p>
						<button
							className="flex items-center gap-2 bg-[#B8EE2C] text-[#1a1a1a] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#99c800] transition-colors shrink-0"
							onClick={handleContactFormSubmit}
							disabled={isLoading}
						>
							Submit
							{isLoading ? (
								<span className="w-5 h-5 border-2 border-transparent border-t-[#1a1a1a] rounded-full animate-spin" />
							) : (
								<img src={arrow} className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>

				{/* Right - Image */}
				<div className="relative hidden lg:block">
					<img
						src={connect}
						alt="connect"
						className="w-full h-full object-cover"
					/>
					{/* Prefer a call note */}
					{/* <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-3">
						<div className="w-9 h-9 rounded-full bg-[#B8EE2C] flex items-center justify-center shrink-0">
							<img src={phone} className="w-5 h-5" />
						</div>
						<div>
							<p className="text-sm font-semibold text-[#1B412A]">
								Prefer a call?
							</p>
							<p className="text-xs text-[#1a1a1a]/50">
								Book a 20-min intro - we'll send a Calendly link with your
								confirmation.
							</p>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Contact;
