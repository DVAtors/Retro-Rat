import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SaveButtonComponent() {
	return (
		<button className="singleProductSaveBtn">
			<div className="iconHeart">
				<FontAwesomeIcon icon={faHeart} />
			</div>
			<div className="blackText">SAVE</div>
		</button>
	);
}

export default SaveButtonComponent;
