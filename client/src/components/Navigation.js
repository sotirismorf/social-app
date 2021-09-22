import Button from './Button.js'
import User from './User'

function Navigation(props) {
	return (
		<div className="Navigation">
			<h1>Nosebook</h1>
			<div className="nav-buttons">
				<Button focused={props.pathname==="/"} text="Home" route="/"/>
				<Button focused={props.pathname==="/friends"} text="Friends" route="/friends"/>
			</div>
			<User />
		</div>
  );
}

export default Navigation;
