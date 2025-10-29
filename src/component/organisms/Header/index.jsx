import { Phone, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import logoImage from "../../../assets/Logo.png";


export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            {/* 🔹 Top Contact Bar */}
            <div className="bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39]">
                <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm">
                    <a
                        href="tel:+919558086593"
                        className="flex items-center gap-1 hover:opacity-80 transition-opacity !text-white"
                    >
                        <Phone size={14} />
                        <span>+91 9558086593</span>
                    </a>
                    <span className="hidden md:inline">|</span>
                    <a
                        href="tel:+918980002428"
                        className="flex items-center gap-1 hover:opacity-80 transition-opacity !text-white"
                    >
                        <Phone size={14} />
                        <span>+91 8980002428</span>
                    </a>
                    <span className="hidden md:inline">|</span>
                    <a
                        href="mailto:info@tapichemicals.com"
                        className="flex items-center gap-1 hover:opacity-80 transition-opacity !text-white"
                    >
                        <Mail size={14} />
                        <span>info@tapichemicals.com</span>
                    </a>
                </div>
            </div>

            {/* 🔹 Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center">
                        <div className="flex justify-center items-center">
                            <img
                                src={logoImage}
                                alt="Tapi Chemicals"
                                className="!h-12"
                            />
                            <span className="hidden md:inline-block bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] bg-clip-text text-transparent font-bold text-2xl">
                                TAPI CHEMICALS
                            </span>

                        </div>
                    </NavLink>

                    {/* Navigation Links */}
                    <nav className="flex gap-2">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/products", label: "Products" },
                            { path: "/about", label: "About Us" },
                            { path: "/contact", label: "Contact Us" },
                        ].map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                end
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-md transition-colors ${isActive
                                        ? "bg-green-700 !text-white"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
