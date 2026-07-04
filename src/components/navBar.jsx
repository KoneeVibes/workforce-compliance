import { useState } from "react";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const links = ["Problem", "Solution", "Stakeholders", "Industries", "FAQ"];

	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="bg-[#F0EDE6] pt-8 px-4 py-4 sticky top-0 z-50">
			<nav className="flex items-center justify-between px-4 py-2 max-w-[1280px] mx-auto border border-[#1a1a1a]/10 rounded-full bg-[#F0EDE6]">
				{/* Logo */}
				<a href="#" className="flex items-center gap-2">
					<img src={logo} alt="Workforce Compliance" className="h-7 w-auto" />
					<span className="font-semibold text-[#1a1a1a] text-[16px] ">
						Workforce Compliance
					</span>
				</a>

				{/* Desktop Nav Links */}
				<ul className="hidden lg:flex items-center gap-8">
					{links.map((link) => (
						<li key={link}>
							<button
								onClick={() => scrollTo(link.toLowerCase())}
								className="text-[14px] text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer"
							>
								{link}
							</button>
						</li>
					))}
				</ul>

				{/* Desktop CTA */}
				<button
					onClick={() => scrollTo("contact")}
					className="hidden lg:flex items-center gap-2 bg-[#B8EE2C] text-black text-sm px-5 py-2.5 rounded-full hover:bg-[#A3D426] transition-colors cursor-pointer"
				>
					Join Waitlist
					<img src={arrow} className="w-5 h-5" />
				</button>

				{/* Hamburger */}
				<button
					className="lg:hidden flex flex-col gap-1.5 p-2"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					<span
						className={`block w-5 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
					/>
					<span
						className={`block w-5 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
					/>
					<span
						className={`block w-5 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
					/>
				</button>
			</nav>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="lg:hidden mt-2 max-w-[1280px] mx-auto border border-[#1a1a1a]/10 rounded-2xl bg-[#F0EDE6] px-6 py-4 flex flex-col items-center gap-4">
					<ul className="flex flex-col items-center gap-4">
						{links.map((link) => (
							<li key={link}>
								<button
									onClick={() => {
										scrollTo(link.toLowerCase());
										setIsOpen(false);
									}}
									className="text-sm text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer"
								>
									{link}
								</button>
							</li>
						))}
					</ul>
					<button
						onClick={() => {
							scrollTo("contact");
							setIsOpen(false);
						}}
						className="flex items-center gap-2 bg-[#B8EE2C] text-black text-sm px-5 py-2.5 rounded-full hover:bg-[#A3D426] transition-colors cursor-pointer"
					>
						Join Waitlist
						<img src={arrow} className="w-5 h-5" />
					</button>
				</div>
			)}
		</div>
	);
};

export default Navbar;
