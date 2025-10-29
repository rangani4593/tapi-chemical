import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your inquiry! We’ll contact you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            product: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-lg opacity-90">
                        We're here to help you with your chemical requirements. Reach out to
                        us today!
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
                    {/* Left: Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium mb-2">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium mb-2">Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="+91 XXXXXXXXXX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Your company name"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    Product of Interest
                                </label>
                                <select
                                    name="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="">Select a product category</option>
                                    <option value="textile-dyeing">
                                        Textile Dyeing & Washing
                                    </option>
                                    <option value="textile-printing">Textile and Printing</option>
                                    <option value="ceramic">Ceramic</option>
                                    <option value="detergent">Detergent</option>
                                    <option value="other">Other / General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-medium mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    required
                                    placeholder="Describe your chemical requirements or inquiry..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-blue-700 mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <p className="font-semibold">Address:</p>
                                    <p>
                                        Radhe Krishna Industries Estate, <br />
                                        Kathwada GIDC, Road No-5, <br />
                                        Ahmedabad, Gujarat
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold">Phone:</p>
                                    <p>
                                        <a
                                            href="tel:+919558086593"
                                            className="hover:text-green-700"
                                        >
                                            +91 9558086593
                                        </a>
                                        <br />
                                        <a
                                            href="tel:+918980002428"
                                            className="hover:text-green-700"
                                        >
                                            +91 8980002428
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold">Email:</p>
                                    <a
                                        href="mailto:info@tapichemicals.com"
                                        className="hover:text-green-700"
                                    >
                                        info@tapichemicals.com
                                    </a>
                                </div>

                                <div>
                                    <p className="font-semibold">Working Hours:</p>
                                    <p>
                                        Monday - Saturday
                                        <br />
                                        9:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-72 rounded-xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1585366958113-e28e8e580d3a?auto=format&fit=crop&w=1000&q=80"
                                alt="Chemical Industry"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto text-center px-4 bg-gradient-to-r from-[#555ea350] via-[#1c9f6750] to-[#93ca3950] rounded-xl p-10">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                        Visit Our Office
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Located in the heart of Kathwada GIDC, our office is easily
                        accessible and equipped to handle all your chemical sourcing needs.
                        Visits are welcome by appointment.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                        <a href="tel:+919558086593">
                            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition">
                                📞 Call Us
                            </button>
                        </a>
                        <a href="mailto:info@tapichemicals.com">
                            <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:text-white transition">
                                ✉️ Email Us
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
