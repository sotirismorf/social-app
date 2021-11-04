import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";

import { useAuth } from "../contexts/AuthContext"
import Dropdown from './Dropdown'

function User(props) {
	const { currentUser } = useAuth()
	//const { currentUser, logout } = useAuth()
	//console.log(currentUser)

	return(

		<div className="nav-right">
			<Dropdown />
			<span>{currentUser.email}</span>
			<IconContext.Provider value={{ size:"2em", className: "react-icons" }}>
				<Link className="icon-btn" to="/settings/profile"><CgProfile /></Link>
			</IconContext.Provider>
		</div>
	);

}

export default User;
