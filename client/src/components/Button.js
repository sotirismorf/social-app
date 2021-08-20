import { Link } from "react-router-dom";
import "./Button.css"

function Button(props) {
	let a = 'NavButton';
	if (props.focused) {
		a += ' Focused';
	}
	console.log(props.location)
	return (
		<Link
		className={a}
		to={props.route}
		>
			<span>{props.text}</span>			
		</Link>
  );
}

export default Button;
