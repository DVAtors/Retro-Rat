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
import Homepage from "./pages/Homepage";
import EditProduct from "./pages/EditProduct";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

// Import Browser Router stuff...
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar></Navbar>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/browse" element={<ProductsPage />} />
					<Route path="/sell" element={<SubmitProduct />} />
					<Route path="/sell/:id" element={<EditProduct />} />
					<Route path="/cart" element={<CartPage />} />
					{/* <Route path="/logOut" element={<LoginPage />} /> */}
					<Route path="/login" element={<LoginPage />}>
						<Route index element={<LoginForm />} />
						<Route path="signup" element={<SignUpForm />} />
					</Route>
					<Route path="/product/:id" element={<SingleProductView />}></Route>

					{/* route for switching tabs on admin console page */}
					<Route path="/account/*" element={<AdminConsolePage />} />
					{/* <Route path="/account" element={<UserConsolePage />} /> */}

					{/* routes for panel switching on lig in and sign up page will fgo here */}
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</>
	);
}

export default App;
