import Button from './Button.js'
function Navigation(props) {
	return (
		<div className="Navigation">
			<div className="Line">
				<div class="center">
					<h1 class="left">Librecom</h1>
					<Button focused="true" text="Home" route="/"/>
					<Button text="Friends" route="/friends"/>
				</div>
				</div>
		</div>
  );
}

export default Navigation;
