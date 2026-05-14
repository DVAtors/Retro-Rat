// Import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import Components

import BootSequence from "./pages/BootSequence";
import ProductCard from "./components/ProductCard";
import TunePassword from "./components/TunePassword";
import HeaderFlag from "./components/HeaderFlag";
import SingleProductImage from "./components/SingleProductImage";
import SingleProductView from "./pages/SingleProductView";
import Navbar from "./components/Navbar";

// Import Pages
import ProductsPage from "./pages/Products";
import SubmitProduct from "./pages/SubmitProduct";
import UserConsolePage from "./pages/UserConsolePage";
import AdminConsolePage from "./pages/AdminConsolePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

// Import Browser Router stuff...
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
                {/* 1. Add this wrapper */}
				<div className="app-container"> 
					<Navbar />
                    
                    {/* 2. Wrap your Routes in a main tag */}
					<main className="main-content">
						<Routes>
							<Route path="/browse" element={<ProductsPage />} />
							<Route path="/sell" element={<SubmitProduct />} />
							<Route path="/cart" element={<CartPage />} />
							<Route path="/account" element={<UserConsolePage />} />
							<Route path="/logOut" element={<LoginPage />} />
							<Route path="/product/:id" element={<SingleProductView />} />
						</Routes>
					</main>

					<Footer />
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
