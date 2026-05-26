import React from "react";
import "./CommentSectionComponent.css";

function CommentReplyComponent({ reply }) {
	const author = reply?.author || "TechCollector";
	const text = reply?.text || "Sample reply";
	const time = reply?.time || "3 Days Ago";

	return (
		<div className="comment-reply">
			<div className="user-icon">
				<span className="users-icon">{author.charAt(0)}</span>
			</div>
			<div className="reply-content">
				<div className="reply-head">
					<span className="reply-person-name">{author}</span>
					<span className="reply-time">{time}</span>
				</div>
				<span className="reply-self">{text}</span>
			</div>
		</div>
	);
}

export default CommentReplyComponent;
