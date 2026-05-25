import React, { useState } from "react";
import "./CommentComponent.css";

import CommentReplyComponent from "./CommentReplyComponent";
import ReplyCommentFieldComponent from "./ReplyCommentField";

// - Accepts a `comment` prop (object with `author`, `text`, `time`) created by
//   the parent (`CommentSectionComponent`). If no `comment` is provided,
//   this component falls back to sample/default values for demo purposes.
function CommentComponent({ comment }) {
	// Controls whether the reply input is shown for this comment
	const [showReplyField, setShowReplyField] = useState(false);
	// Local array of replies for this comment
	const [replies, setReplies] = useState([]);

	// Use provided comment data or sensible defaults for demo
	const author = comment?.author || "KeyboardEnthusiast";
	const text = comment?.text || "Does this have the original keycaps?";
	const time = comment?.time || "3 Days Ago";

	// Called by ReplyCommentFieldComponent when the user posts a reply.
	// Creates a small reply object and prepends it into `replies`.
	function handleAddReply(replyText) {
		const newReply = {
			id: Date.now(),
			author: "You",
			text: replyText,
			time: "Just now",
		};
		setReplies((r) => [newReply, ...r]);
		// Hide the reply input once the reply is posted
		setShowReplyField(false);
	}

	return (
		<div className="commentContainer">
			<div className="commentAndReply">
				<div className="commentSelf">
					<div className="commentAuthor">
						<div className="authorImage">
							<h3>{author.charAt(0)}</h3>
						</div>
						<div className="commentInfo">
							<span className="authorName">{author}</span>
							<div className="commentDate">{time}</div>
							{/* Reply button: toggles the inline reply field */}
							<button
								className="replyBtn"
								onClick={() => setShowReplyField((v) => !v)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="17"
									viewBox="0 0 24 17"
									fill="none">
									<g clipPath="url(#clip0_641_2037)">
										<path
											d="M3.818 14.6602H17.6147C22.5715 14.6602 22.7587 5.71657 17.6147 5.71657H2.18164M2.18164 5.71657L5.71499 2.18164M2.18164 5.71657L5.71499 9.24986"
											stroke="black"
											strokeOpacity="0.6"
											strokeWidth="4"
											strokeLinecap="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_641_2037">
											<rect width="24" height="16.9091" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</button>
						</div>
					</div>
					<div className="comment">
						<span className="commentText">{text}</span>
					</div>

					{/* Reply field: only show when toggled */}
					{showReplyField && (
						<ReplyCommentFieldComponent onSubmit={handleAddReply} />
					)}

					{/* Render replies */}
					{replies.map((r) => (
						<CommentReplyComponent key={r.id} reply={r} />
					))}
				</div>
			</div>
		</div>
	);
}

export default CommentComponent;
