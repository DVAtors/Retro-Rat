// This component is still work in progress...

// Imports:
import "./CommentSectionComponent.css";

// Function:

function CommentReplyComponent() {
	return (
		<div className="commentContainer replyColour">
			<div className="commentAndReply">
				<div className="commentSelf">
					<div className="commentAuthor">
						<div className="authorImage">
							<h3>K</h3>
						</div>
						<div className="commentInfo">
							<span className="authorName">KeyboardEnthusiast</span>
							div.authorTag
							<div className="commentDate">3 Days Ago</div>
						</div>
					</div>
					<div className="comment">
						<span className="commentText">
							Does this have the original keycaps?
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

// Export Component:

export default CommentReplyComponent;
