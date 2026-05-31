import React, { useState } from "react";
import "./CommentSectionComponent.css";

import CommentFieldComponent from "./CommentFieldComponent";
import PostCommentButton from "./PostCommentButton";
import CommentComponent from "./CommentComponent";

import { apiPost } from "../client";


function CommentSectionComponent({ listingId }) {
	// `input` holds the value of the comment field (controlled input)
	const [input, setInput] = useState("");
	// `comments` is an array of posted comment objects shown below the input
	const [comments, setComments] = useState([]);

	// handlePost: validate input, create a lightweight comment object,
	// prepend it to `comments` and clear the input field.
	function handlePost() {
    if (!input.trim()) return;

    apiPost(`/comments/listing/${listingId}`, { text: input.trim() })
        .then(savedComment => {
            // ONLY update the screen if the server sends back the saved comment
            setComments(prev => [savedComment, ...prev]);
            setInput("");
        })
        .catch(err => {
            console.error("Failed to post comment:", err);
        });
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
