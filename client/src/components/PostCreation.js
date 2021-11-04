import { useState } from "react";

function PostCreation() {
	const [body, setBody] = useState("");
	const [charNum, setCharNum] = useState(0);
	const authorid = 2;

	const recalculate = e => {
		if (e.target.value.length < 256) {
			setBody(e.target.value)
			setCharNum(e.target.value.length)
		}
	}

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
			<h3 className="mt-0 mb-10 center">Create a public post</h3>
			<form className="" onSubmit={onSubmitForm}>	
				<textarea
					className="mb-5"
					type="text"
					value={body}
					onChange={recalculate}
					placeholder="Type something...">
				</textarea>
				<button className="button-regular">POST</button>
				<span className="fl-r">{charNum}/255 characters</span>
			</form>
		</div>
  );
}

export default PostCreation;
