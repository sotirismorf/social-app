import { Link, useHistory } from "react-router-dom"
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";

import { useAuth } from "../contexts/AuthContext"
import "./Dropdown.css"

function Dropdown(props) {
	const { logout } = useAuth()
	const history = useHistory()

	async function handleLogout() {
		try {
			await logout()
			history.push("/login")
		} catch (error){
			console.log(error)
		}
	}

	return(
		<div className="tool-list">
			<Link className="dropdown-item" to="/profile">Your Profile</Link>
			<Link className="dropdown-item" to="/settings">Settings</Link>
			<span className="dropdown-item" onClick={handleLogout}>Log Out</span>
		</div>
	);

}

export default Dropdown;
