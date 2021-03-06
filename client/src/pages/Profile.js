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
	console.log(currentUser)

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
				<h1>{currentUser.displayName}</h1>
				<h3>{currentUser.email}</h3>
			</div>
			</div>

		</div>
  );
}

export default Profile;
