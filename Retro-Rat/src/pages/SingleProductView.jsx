// Imports:
import React from "react";

import SingleProductImage from "../components/SingleProductImage";
import SingleProductInformation from "../components/SingleProductInformation";
import CommentSectionComponent from "../components/CommentSectionComponent";

import "../pages/SingleProductView.css";
import "../components/SingleProductImage.css";
import "../components/SingleProductInformation.css";

// Function:

function SingleProductView() {
	return (
		<div className="singleProductView">
			<div className="mainContent">
				<div className="breadcrumbs"></div>
				<div className="productDetails">
					<SingleProductImage />
					<SingleProductInformation />
				</div>
				<CommentSectionComponent />
			</div>
		</div>
	);
}

// Export Component:

export default SingleProductView;
