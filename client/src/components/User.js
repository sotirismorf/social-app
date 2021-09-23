import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";

function User(props) {
	return(
		<IconContext.Provider value={{ size:"2em", className: "react-icons" }}>
			<Link className="icon-btn" to="/signin"><CgProfile /></Link>
		</IconContext.Provider>
	);

}

export default User;
