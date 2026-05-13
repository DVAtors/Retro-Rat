// Imports:
import "./CommentComponent.css";

import CommentReplyComponent from "./CommentReplyComponent";

// Function:

function CommentComponent() {
	return (
		<div className="commentContainer">
			<div className="commentAndReply">
				<div className="commentSelf">
					<div className="commentAuthor">
						<div className="authorImage">
							<h3>K</h3>
						</div>
						<div className="commentInfo">
							<span className="authorName">KeyboardEnthusiast</span>
							<div className="commentDate">3 Days Ago</div>
							<button className="replyBtn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="17"
									viewBox="0 0 24 17"
									fill="none">
									<g clip-path="url(#clip0_641_2037)">
										<path
											d="M3.818 14.6602H17.6147C22.5715 14.6602 22.7587 5.71657 17.6147 5.71657H2.18164M2.18164 5.71657L5.71499 2.18164M2.18164 5.71657L5.71499 9.24986"
											stroke="black"
											stroke-opacity="0.6"
											stroke-width="4"
											stroke-linecap="round"
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
						<span className="commentText">
							Does this have the original keycaps?
						</span>
					</div>
					{/* Comment reply's would be set here */}
					{/* <CommentReplyComponent /> */}
				</div>
			</div>
		</div>
	);
}

// Export Component:

export default CommentComponent;
