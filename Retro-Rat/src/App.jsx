// Import CSS

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

// Import Browser Router stuff...
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			{/* <Navbar /> */}
			{/* <ProductsPage /> */}
			{/* <BootSequence /> */}
			{/* <TunePassword /> */}
			{/* <ProductsPage /> */}
			{/* <HeaderFlag /> */}
			{/* <SingleProductView /> */}

			<BrowserRouter>
				<Navbar></Navbar>
				<Routes>
					{/* <Route path="/" element={<Homepage />} /> */}
					<Route path="/browse" element={<ProductsPage />} />
					<Route path="/sell" element={<SubmitProduct />} />
					{/* <Route path="/cart" element={<CartPage />} /> */}
					<Route path="/account" element={<AdminConsolePage />} />
					{/* <Route path="/account" element={<UserConsolePage />} /> */}
					{/* <Route path="/logIn" element={<LogInSignUpPage />} /> */}
					<Route path="/product/:id" element={<SingleProductView />}></Route>
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</>
	);
}

export default App;
