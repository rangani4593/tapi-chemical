import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../page/Home";
import { Products } from "../page/Products";
import { About } from "../page/About";
import Contact from "../page/Contact";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
