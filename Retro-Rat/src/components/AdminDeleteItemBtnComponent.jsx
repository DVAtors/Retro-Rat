import "./AdminDeleteItemBtnComponent.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DeleteItemBtn({ listingId }) {
	return (
		<Link className="trashIconBtn">
			<FontAwesomeIcon icon={faTrash} />
		</Link>
	);
}

export default DeleteItemBtn;
