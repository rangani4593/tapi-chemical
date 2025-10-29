import { Link } from "react-router-dom";

export function Home() {
    const productCategories = [
        {
            title: "Textile Dyeing & Washing",
            icon: "🧵",
            products: ["Citro W", "Oxalic Acid", "SMBS", "Sodium Sulphate"],
            description: "Specialized chemicals for textile processing and dyeing",
        },
        {
            title: "Ceramic",
            icon: "🏺",
            products: [
                "Sodium Hexa Meta Phosphate",
                "Tri Sodium Phosphate",
                "EDTA",
            ],
            description: "Quality chemicals for ceramic manufacturing",
        },
        {
            title: "Detergent",
            icon: "🧴",
            products: ["SLES", "LABSA", "Caustic Soda", "Soda Ash"],
            description: "Essential ingredients for detergent production",
        },
    ];

    return (
        <div className="min-h-screen font-sans">
            {/* HERO SECTION */}
            <section className="relative h-[600px] flex items-center justify-center text-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1585366958113-e28e8e580d3a?auto=format&fit=crop&w=1600&q=80"
                    alt="Chemical Laboratory"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39]"></div>

                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Sourcing Excellence, Delivering Innovation
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Trusted supplier of quality chemicals for Textile, Ceramic, and
                        Detergent industries.
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center bg-white text-green-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
                    >
                        Explore Products →
                    </Link>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
                            About Tapi Chemicals
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Founded in Ahmedabad, Gujarat, Tapi Chemicals has established
                            itself as a leading chemical sourcing and supply company. We
                            specialize in providing high-quality industrial chemicals to the
                            textile, ceramic, and detergent industries across India.
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Our commitment to excellence and innovation has made us a trusted
                            partner for businesses seeking reliable chemical solutions. We
                            pride ourselves on our deep industry knowledge and
                            customer-centric approach.
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center border border-green-700 text-green-700 font-semibold py-2.5 px-5 rounded-lg hover:bg-green-700 hover:text-white transition"
                        >
                            Learn More →
                        </Link>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1760328715293-6410199deca5?auto=format&fit=crop&w=1200&q=80"
                            alt="Textile Industry"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* PRODUCT CATEGORY SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                        Our Product Categories
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        We supply a comprehensive range of chemicals tailored to meet the
                        specific needs of various industries.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {productCategories.map((cat, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="text-5xl mb-4">{cat.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                                    <p className="text-gray-600 mb-4">{cat.description}</p>

                                    <ul className="text-left mb-6 space-y-2">
                                        {cat.products.map((p, i) => (
                                            <li key={i} className="flex items-center text-gray-700">
                                                <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to="/products"
                                    className="block w-full text-center border border-blue-700 text-blue-700 py-2.5 rounded-lg font-semibold hover:bg-blue-700 hover:!text-white transition"
                                >
                                    View All Products
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INQUIRY SECTION */}
            <section className="py-16 bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-4">
                        Need a Chemical Solution for Your Industry?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                        Our team of experts is ready to help you find the right chemical
                        products for your specific requirements.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
                    >
                        Contact Our Team →
                    </Link>
                </div>
            </section>
        </div>
    );
}
