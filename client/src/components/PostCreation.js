import { useState } from "react";

function PostCreation() {
	const [description, setDescription] = useState("");

	const onSubmitForm = async e => {
		e.preventDefault();
		try {
			const body = { description };
			const response = await fetch("https://www.sotirismorfakidis.xyz/api/posts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			});

		window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className="Box">
			<h1 class="mt-0">Post Something!</h1>
			<form className="Line" onSubmit={onSubmitForm}>	
				<input
					type="text"
					value={description}
					onChange={e => setDescription(e.target.value)}
					placeholder="Type something...">
				</input>
				<button>Post</button>
			</form>
		</div>
  );
}

export default PostCreation;
