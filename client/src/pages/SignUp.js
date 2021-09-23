import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css"
import "../firebase"
import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"

function SignUp() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState("");

	const history = useHistory();

	async function onSubmitForm(e) {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log("hello there")
				history.push("/")
			})
			.catch((error) => {
				const errorCode = error.code;
				//const errorMessage = error.message;
				//setError("Failed to log in");
				if (errorCode === "auth/invalid-email"){
					setError("Please enter a valid email")
				}
			});
	};

	const auth = getAuth();

	return (
		<div className="container">
			<form
				className="SignInForm"
				onSubmit={onSubmitForm}
				spellCheck="false">

				<h1 className="mt-0">Create an Account</h1>
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
				<input
					type="password"
					className="Form"
					ref={passwordRef}
					placeholder="Confirm Password">
				</input>
				<button className="bold">SIGN UP</button>
			</form>
		
			<Link className="text-links" to="/signin">Already have an accout? Sign In..</Link>
			<span className="error-message">{error}</span>
		</div>
  );
}

export default SignUp;
