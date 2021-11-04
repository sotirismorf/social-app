import React, { useRef , useState } from "react"
import { useParams } from "react-router-dom";
import Feed from '../components/Feed.js'
import Navigation from '../components/Navigation.js'
import { useAuth } from "../contexts/AuthContext"

function Profile() {
	//const { username } = useParams();
	const [name,setName] = useState("");
	const { currentUser , updateUsername} = useAuth()
	const newUsernameRef = useRef();
	//newUsernameRef.current.value = currentUser.displayName

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
				<h3>Name</h3>
				<form onSubmit={onSubmitForm} >
					<input
						value={name}
						onChange={e => setName(e.target.value)}>
					</input>
					<button>Update Username</button>
				</form>
			</div>
			</div>

		</div>
  );
}

export default Profile;
