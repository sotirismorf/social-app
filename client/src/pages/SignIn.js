import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"

import { useAuth } from "../contexts/AuthContext"
import "./SignIn.css"

function SignIn() {
	const { login } = useAuth();
	const emailRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState("");

	const history = useHistory();

	async function onSubmitForm(e) {
		e.preventDefault();

		try {
			await login(emailRef.current.value, passwordRef.current.value)
			history.push("/")
		} catch (error) {
			console.log(error)
			const errorCode = error.code;
			//const errorMessage = error.message;
			if (errorCode === "auth/invalid-email"){
				setError("Please enter a valid email");
			} else if (errorCode === "auth/internal-error"){ 
				setError("Please type your Email and Password");
			} else if (errorCode === "auth/user-not-found"){ 
				setError("Wrong Email or Password");
			}

		}
		/*
		signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
			.then((userCredential) => {
				const user = userCredential.user;
				history.push("/")
			})
			.catch((error) => {
				const errorCode = error.code;
				//const errorMessage = error.message;
				console.log(errorCode);
				if (errorCode === "auth/invalid-email"){
					setError("Please enter a valid email");
				} else if (errorCode === "auth/internal-error"){ 
					setError("Please type your Email and Password");
				} else if (errorCode === "auth/user-not-found"){ 
					setError("Wrong Email or Password");
				}
			});
			*/
	};

	//const auth = getAuth();

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
