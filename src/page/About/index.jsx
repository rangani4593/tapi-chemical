import { CheckCircle2, Target, Users, Award } from "lucide-react";

export function About() {
    const values = [
        {
            icon: <CheckCircle2 className="w-8 h-8 text-[#2e7d32]" />,
            title: "Quality Assurance",
            description:
                "We ensure the highest quality standards in all our chemical products",
        },
        {
            icon: <Target className="w-8 h-8 text-[#1565c0]" />,
            title: "Customer Focus",
            description: "Our customer-centric approach drives everything we do",
        },
        {
            icon: <Users className="w-8 h-8 text-[#2e7d32]" />,
            title: "Expert Team",
            description: "Experienced professionals dedicated to serving your needs",
        },
        {
            icon: <Award className="w-8 h-8 text-[#1565c0]" />,
            title: "Industry Leadership",
            description: "Recognized leaders in chemical sourcing and supply",
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* HERO SECTION */}
            <section className="relative py-20 bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About Tapi Chemicals
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto opacity-90">
                        Leading the way in chemical sourcing and supply for over a decade,
                        serving industries across Gujarat and beyond.
                    </p>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1710334939041-ea7a6e5f66f8?auto=format&fit=crop&w=1000&q=80"
                            alt="Chemical Industry"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-semibold text-[#1565c0] mb-6">
                            Who We Are
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Tapi Chemicals is a leading chemical sourcing and supply company
                            based in Ahmedabad, Gujarat. We specialize in providing
                            high-quality industrial chemicals to the textile, ceramic, and
                            detergent industries across India.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Since our establishment, we have built a reputation for
                            reliability, quality, and excellence in chemical supply. Our
                            strategic location in Kathwada GIDC allows us to efficiently serve
                            clients throughout the region and beyond.
                        </p>
                        <p className="text-gray-700">
                            We understand that the success of your business depends on the
                            quality of the materials you use. That's why we source only the
                            finest chemicals from trusted manufacturers and maintain strict
                            quality control throughout our supply chain.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR MISSION */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold text-[#2e7d32] mb-6">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 mb-4 text-lg italic">
                            "Delivering innovation through reliable chemical sourcing and
                            sustainable partnerships."
                        </p>
                        <p className="text-gray-700 mb-4">
                            At Tapi Chemicals, our mission is to be the most trusted partner
                            for industrial chemical needs. We strive to:
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            {[
                                "Provide consistent access to high-quality chemical products",
                                "Build long-term relationships based on trust and reliability",
                                "Support sustainable and responsible sourcing practices",
                                "Deliver exceptional customer service and technical support",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="w-6 h-6 bg-[#2e7d32] text-white rounded-full flex items-center justify-center mr-3 mt-1 text-sm">
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1666558889375-798fa96b559a?auto=format&fit=crop&w=1000&q=80"
                            alt="Laboratory Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* OUR VALUES */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-[#1565c0] mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        The principles that guide our business and define our commitment to
                        excellence
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="p-8 border border-gray-200 rounded-2xl text-center shadow-sm hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-16 bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-10">
                        Why Choose Tapi Chemicals?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                emoji: "🏭",
                                title: "Industry Expertise",
                                desc: "Deep understanding of textile, ceramic, and detergent industry requirements",
                            },
                            {
                                emoji: "🚚",
                                title: "Reliable Supply",
                                desc: "Consistent availability and timely delivery of chemical products",
                            },
                            {
                                emoji: "💼",
                                title: "Competitive Pricing",
                                desc: "Fair pricing with no compromise on quality or service",
                            },
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="text-5xl mb-4">{item.emoji}</div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="opacity-90">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
