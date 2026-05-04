// Import CSS

import "./App.css";

// Import Components

import BootSequence from "./pages/BootSequence";
import ProductCard from "./components/ProductCard";
import TunePassword from "./components/TunePassword";
import HeaderFlag from "./components/HeaderFlag";
import SingleProductImage from "./components/SingleProductImage";

// Import Pages

import ProductsPage from "./pages/Products";
import SingleProductView from "./pages/SingleProductView";

function App() {
	return (
		<div>
			{/* <BootSequence /> */}
			{/* <TunePassword/> */}
			{/* <ProductsPage/> */}

			{/* <HeaderFlag /> */}

			<SingleProductView />

			{/* <SingleProductImage /> */}
		</div>
	);
}

export default App;
