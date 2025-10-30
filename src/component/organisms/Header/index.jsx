import { Phone, Mail, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logoImage from "../../../assets/Logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* 🔹 Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm">
          <a
            href="tel:+919558086593"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity text-white"
          >
            <Phone size={14} />
            <span>+91 9558086593</span>
          </a>
          <span className="hidden md:inline text-white">|</span>
          <a
            href="tel:+918980002428"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity text-white"
          >
            <Phone size={14} />
            <span>+91 8980002428</span>
          </a>
          <span className="hidden md:inline text-white">|</span>
          <a
            href="mailto:info@tapichemicals.com"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity text-white"
          >
            <Mail size={14} />
            <span>info@tapichemicals.com</span>
          </a>
        </div>
      </div>

      {/* 🔹 Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Tapi Chemicals" className="h-12 w-auto" />
          <span className="hidden md:inline-block bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] bg-clip-text text-transparent font-bold text-2xl">
            TAPI CHEMICALS
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) =>
                `px-4 py-2 font-medium rounded-md transition-all duration-200
                ${isActive
                  ? "bg-green-700 text-white"
                  : "text-gray-700 hover:text-green-700 hover:bg-gray-100"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-green-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200
                  ${isActive
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-green-700"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
