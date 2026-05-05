// Imports:
import "../components/CommentSectionComponent.css";
import "../components/CommentFieldComponent.css";

import CommentFieldComponent from "./CommentFieldComponent";
import PostCommentButton from "./PostCommentButton";
import CommentComponent from "./CommentComponent";

// Function:

function CommentSectionComponent() {
	return (
		<div className="commentSection">
			<CommentFieldComponent />
			<PostCommentButton />
			<CommentComponent />
			<CommentComponent />
			<div></div>
		</div>
	);
}

// Export Component:

export default CommentSectionComponent;
