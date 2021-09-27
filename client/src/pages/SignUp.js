import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"

import { useAuth } from "../contexts/AuthContext"
import "./SignIn.css"

function SignUp() {
	const { signUp } = useAuth();
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfRef = useRef()
	const [error, setError] = useState("");

	const history = useHistory();

	async function onSubmitForm(e) {
		e.preventDefault();
		try {
			await signUp(emailRef.current.value, passwordRef.current.value)
			history.push("/")
		} catch (error) {
			console.log(error)
			const errorCode = error.code;
			//const errorMessage = error.message;
			if (errorCode === "auth/invalid-email"){
				setError("Please enter a valid email");
			} else if (errorCode === "auth/internal-error"){ 
				setError("Please enter a valid Email and Password");
			} else if (errorCode === "auth/weak-password"){
				setError("Enter a more secure password")
			}

		}
		/*
		if (passwordRef.current.value === passwordConfRef.current.value){

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
				console.log(errorCode);
				if (errorCode === "auth/invalid-email"){
					setError("Please enter a valid email")
				}else if (errorCode === "auth/weak-password"){
					setError("Enter a more secure password")
				}
			});
		}else {
			setError("Passwords do not match")
		}
		*/
	};

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
					ref={passwordConfRef}
					placeholder="Confirm Password">
				</input>
				<button className="bold">SIGN UP</button>
			</form>
		
			<Link className="text-links" to="/login">Already have an accout? Sign In..</Link>
			<span className="error-message">{error}</span>
		</div>
  );
}

export default SignUp;
