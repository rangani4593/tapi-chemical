import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router";
import Header from "./component/organisms/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
                <Header />
                <main className="grow">
                    <AppRoutes />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
