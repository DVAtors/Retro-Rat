import React, { useState } from "react";
import "./CommentSectionComponent.css";

import CommentFieldComponent from "./CommentFieldComponent";
import PostCommentButton from "./PostCommentButton";
import CommentComponent from "./CommentComponent";

function CommentSectionComponent() {
	// `input` holds the value of the comment field (controlled input)
	const [input, setInput] = useState("");
	// `comments` is an array of posted comment objects shown below the input
	const [comments, setComments] = useState([]);

	// handlePost: validate input, create a lightweight comment object,
	// prepend it to `comments` and clear the input field.
	function handlePost() {
		if (!input.trim()) return; // guard against empty submissions
		const newComment = {
			id: Date.now(),
			author: "You",
			text: input.trim(),
			time: "Just now",
		};
		setComments((c) => [newComment, ...c]);
		setInput("");
	}

	return (
		<div className="commentSection">
				<CommentFieldComponent value={input} onChange={setInput} />

				<PostCommentButton onClick={handlePost} disabled={!input.trim()} />

			{comments.map((c) => (
    			<CommentComponent key={c._id || c.id} comment={c} />
			))}
		</div>
	);
}

export default CommentSectionComponent;
