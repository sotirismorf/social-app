import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css"
import "../firebase"
import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"

function SignIn() {
	const emailRef = useRef()
	const passwordRef = useRef()
	//const [email, setEmail] = useState("");
	//const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const history = useHistory();

	async function onSubmitForm(e) {
		e.preventDefault();

		signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log("hello there")
				history.push("/")
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError("Failed to log in");
			});
	};

	const auth = getAuth();

	return (
		<div className="container">
			<form
				className="SignInForm"
				onSubmit={onSubmitForm}
				spellCheck="false">

				<h1 className="mt-0">Sign In</h1>
				<input
					type="email"
					className="Form"
					ref={emailRef}
					placeholder="Email">
				</input>
				<input
					type="password"
					className="Form"
					ref={passwordRef}
					placeholder="Password">
				</input>
				<button class="bold">LOG IN</button>
			</form>
		
			<Link className="text-links" to="/signup">Dont have an accout? Sign up.</Link>
			<span className="error-message">{error}</span>
		</div>
  );
}

export default SignIn;
