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
			{/* Controlled input: value and onChange are wired to local state */}
			<CommentFieldComponent value={input} onChange={setInput} />

			{/* Post button: disabled when input is empty; calls handlePost */}
			<PostCommentButton onClick={handlePost} disabled={!input.trim()} />

			{/* Render each posted comment. Each child manages its own replies. */}
			{comments.map((c) => (
				<CommentComponent key={c.id} comment={c} />
			))}
		</div>
	);
}

export default CommentSectionComponent;
