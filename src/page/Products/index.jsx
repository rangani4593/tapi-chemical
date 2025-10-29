import { useState } from "react";
import { Send } from "lucide-react";
import ContactModal from "../../component/organisms/ContactModal";

export function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleInquiry = (productName) => {
        setSelectedProduct(productName);
        setIsModalOpen(true);
    };

    const textileProducts = [
        { name: "Citro W", description: "Powerful washing agent for textile processing" },
        { name: "Oxalic Acid", description: "Effective bleaching and cleaning agent" },
        { name: "SMBS (Sodium Metabisulphite)", description: "Reducing agent and bleaching chemical" },
        { name: "Sodium Sulphate", description: "Leveling agent for dyeing processes" },
        { name: "Sodium Silicate", description: "Detergent builder and stabilizer" },
        { name: "Caustic Soda Flakes", description: "Essential for mercerization and scouring" },
    ];

    const textilePrintingProducts = [
        { name: "Citric Acid", description: "pH adjuster and neutralizing agent" },
        { name: "Glycerine", description: "Humectant and softening agent" },
        { name: "Aluminium Sulphate", description: "Mordant for dyeing and printing" },
        { name: "Acetic Acid", description: "pH control and textile finishing" },
        { name: "Hydrogen Peroxide", description: "Bleaching agent for textiles" },
        { name: "Formic Acid", description: "Dyeing assistant and pH regulator" },
    ];

    const ceramicDetergentProducts = [
        { name: "Sodium Hexa Meta Phosphate", description: "Deflocculant for ceramic slip preparation" },
        { name: "Tri Sodium Phosphate", description: "Cleaning and degreasing agent" },
        { name: "EDTA (Ethylenediaminetetraacetic acid)", description: "Chelating agent and stabilizer" },
        { name: "SLES (Sodium Lauryl Ether Sulfate)", description: "Surfactant for detergent formulation" },
        { name: "LABSA (Linear Alkyl Benzene Sulphonic Acid)", description: "Key ingredient in detergent production" },
        { name: "Soda Ash", description: "Water softener and pH regulator" },
    ];

    const renderSection = (title, subtitle, products, colorClass) => (
        <section className="mb-16">
            <div className="mb-8 text-center md:text-left">
                <h2 className={`text-2xl md:text-3xl font-semibold mb-2 ${colorClass}`}>
                    {title}
                </h2>
                <p className="text-gray-600">{subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mb-6">{product.description}</p>
                        </div>

                        <button
                            onClick={() => handleInquiry(product.name)}
                            className="w-full flex items-center justify-center bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            <Send size={16} className="mr-2" />
                            Send Inquiry
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#555ea3] via-[#1c9f67] to-[#93ca39] bg-clip-text text-transparent">
                        Our Products
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We offer a comprehensive range of high-quality chemicals for various
                        industrial applications. Browse our product categories below and
                        contact us for inquiries.
                    </p>
                </div>

                {/* Product Sections */}
                {renderSection(
                    "Textile Dyeing and Washing",
                    "Specialized chemicals for textile processing, dyeing, and washing applications.",
                    textileProducts,
                    "text-[#2e7d32]"
                )}
                {renderSection(
                    "Textile and Printing",
                    "Essential chemicals for textile printing and finishing processes.",
                    textilePrintingProducts,
                    "text-[#1565c0]"
                )}
                {renderSection(
                    "Ceramic & Detergent",
                    "Quality chemicals for ceramic manufacturing and detergent production.",
                    ceramicDetergentProducts,
                    "text-[#2e7d32]"
                )}
            </div>

            {/* Inquiry Modal */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={selectedProduct}
            />
        </div>
    );
}
