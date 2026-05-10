// Import CSS

import "./App.css";

// Import Components

import BootSequence from "./pages/BootSequence";
import ProductCard from "./components/ProductCard";
import TunePassword from "./components/TunePassword";
import HeaderFlag from "./components/HeaderFlag";
import SingleProductImage from "./components/SingleProductImage";

import ProductsPage from './pages/Products';
import SubmitProduct from './pages/SubmitProduct';
// Import Pages


import SingleProductView from "./pages/SingleProductView";

import Navbar from "./components/Navbar";

// Import Browser Router stuff...
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
					<Route path="/browse" element={<SubmitProduct />} />
					{/* <Route path="/sell" element={<SellForm />} /> */}
					{/* <Route path="/cart" element={<CartPage />} /> */}
					{/* <Route path="/account" element={<AccountsPage />} /> */}
					{/* <Route path="/logIn" element={<LogInSignUpPage />} /> */}
					<Route path="/product/:id" element={<SingleProductView />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
