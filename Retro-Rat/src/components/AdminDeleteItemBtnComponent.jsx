import "./AdminDeleteItemBtnComponent.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function DeleteItemBtn({ listingId }) {
	return (
		<Link className="trashIconBtn">
			<FontAwesomeIcon icon={faTrashCan} />
		</Link>
	);
}

export default DeleteItemBtn;
