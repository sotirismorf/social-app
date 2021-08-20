import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home.js'
import Navigation from './components/Navigation.js'
import Friends from './components/Friends.js'

function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route path="/friends" exact component={() => <Friends />} />
				</Switch>
			</Router>
		</div>
  );
}

export default App;
