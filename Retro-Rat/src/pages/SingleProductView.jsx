// Imports:
import React from "react";

import SingleProductImage from "../components/SingleProductImage";
import SingleProductInformation from "../components/SingleProductInformation";

import "../pages/SingleProductView.css";
import "../components/SingleProductImage.css";
import "../components/SingleProductInformation.css";

// Function:

function SingleProductView() {
	return (
		<div className="singleProductView">
			<div className="breadcrumbs"></div>
			<div className="productDetails">
				<SingleProductImage></SingleProductImage>
				<SingleProductInformation></SingleProductInformation>
			</div>
			<div className="commentSection"></div>
		</div>
	);
}

// Export Component:

export default SingleProductView;

// export default function SingleProductView() {
// 	return (
// 		<div className="">
// 			<div className="breadcrumbs"></div>
// 			<div className="productDetails">
// 				<SingleProductImage></SingleProductImage>
// 				<div className="singleProductInformation"></div>
// 			</div>
// 			<div className="commentSection"></div>
// 		</div>
// 	);
// }
