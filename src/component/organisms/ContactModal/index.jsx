import { useState } from "react";
import { createPortal } from "react-dom";

export default function ContactModal({ isOpen, onClose, productName = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: productName,
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      product: "",
      message: "",
    });
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] px-3 sm:px-4">
      <div className="bg-white w-full max-w-sm sm:max-w-md rounded-xl shadow-lg p-4 sm:p-6 relative animate-fadeInUp overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-center bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] bg-clip-text text-transparent">
          Send Product Inquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Product</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Message *</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 sm:py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] text-white py-2 rounded-lg font-medium text-sm hover:opacity-90 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
