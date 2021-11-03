import { useState } from "react";

function PostCreation() {
	const [body, setBody] = useState("");
	const authorid = 2;

	const onSubmitForm = async e => {
		e.preventDefault();
		try {
			const rbody = { body , authorid };
			const response = await fetch("/api/posts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(rbody)
			});

		console.log(response);
		window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className="Box">
			<h1 className="mt-0">Post Something!</h1>
			<form className="Line" onSubmit={onSubmitForm}>	
				<input
					type="text"
					value={body}
					onChange={e => setBody(e.target.value)}
					placeholder="Type something...">
				</input>
				<button>Post</button>
			</form>
		</div>
  );
}

export default PostCreation;
