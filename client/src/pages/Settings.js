import React, { useState } from "react"
import { useParams } from "react-router-dom";
import Feed from '../components/Feed.js'
import Navigation from '../components/Navigation.js'
import { useAuth } from "../contexts/AuthContext"

function Profile() {
	//const { username } = useParams();
	const { currentUser , updateUsername} = useAuth()
	const [name,setName] = useState(currentUser.displayName);
	const [phone,setPhone] = useState(currentUser.phoneNumber ? currentUser.phoneNumber : "");

	async function onSubmitForm(e) {
		e.preventDefault();

		try {
			await updateUsername(name)
			//history.push("/")
		} catch (error) {
			console.log(error)
			//const errorCode = error.code;
			//const errorMessage = error.message;
		} finally {
			//setBio(currentUser.displayName)
		}
	};

	return (
		<div className="Home">
			<Navigation />

			<div className="center">
			<div className="Box">
				<h1>Public profile</h1>
				<h3>Name {currentUser.displayName}</h3>
				<form onSubmit={onSubmitForm} >
					<input
						className="one"
						value={name}
						onChange={e => setName(e.target.value)}>
					</input>
					<input
						className="two"
						value={phone}
						onChange={e => setPhone(e.target.value)}
						type="tel"
						placeholder="no phone number">
					</input>
					<button>Update Username</button>
				</form>
			</div>
			</div>

		</div>
  );
}

export default Profile;
