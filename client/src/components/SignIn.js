import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css"
import "../firebase"
//import "../contexts/AuthContext.js"
import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"

function Signup() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const history = useHistory();

	async function onSubmitForm(e) {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				history.push("/")
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				setError("Failed to log in");
			});
	};

	const auth = getAuth();

	return (
		<div className="SignIn">
			<div className="Column">
			<form className="SignInForm my-auto"
				onSubmit={onSubmitForm}
				spellcheck="false">
				<h1 className="mt-0">Sign In</h1>
				<input
					type="text"
					className="Form my-5"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Email">
				</input>
				<input
					type="password"
					className="Form my-5"
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder="Password">
				</input>
				<button>SignIn</button>
			</form>
			<p>{error}</p>
			</div>
		</div>
  );
}

export default Signup;
