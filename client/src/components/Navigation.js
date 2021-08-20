import Button from './Button.js'

function Navigation(props) {
	return (
		<div className="Navigation">
			<div className="Line">
				<div class="center">
					<h1 class="left my-0 p-5">Nosebook</h1>
					<Button focused={props.pathname==="/"} text="Home" route="/"/>
					<Button focused={props.pathname==="/friends"} text="Friends" route="/friends"/>
				</div>
				</div>
		</div>
  );
}

export default Navigation;
