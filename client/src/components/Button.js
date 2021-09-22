import { NavLink } from "react-router-dom";
import "./Button.css"

function Button(props) {
	return (
		<NavLink className="inactive" exact to={props.route}>
			<span>{props.text}</span>			
		</NavLink>
  );
}

export default Button;
