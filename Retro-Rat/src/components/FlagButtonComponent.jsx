import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function FlagButtonComponent({ listingId }) {
	return (
		<Link to={`/sell/${listingId}`} className="flagIconBtn">
			<FontAwesomeIcon icon={faPencil} />
		</Link>
	);
}

export default FlagButtonComponent;
