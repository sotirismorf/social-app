import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home.js'
import Friends from './components/Friends.js'
import SignIn from './pages/SignIn.js'
import SignUp from './pages/SignUp.js'
import NotFound from './pages/NotFound'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route path="/friends" exact component={() => <Friends />} />
					<Route path="/signin" exact component={() => <SignIn />} />
					<Route path="/signup" exact component={() => <SignUp />} />
					<Route component={() => <NotFound />} />
				</Switch>
			</Router>
		</div>
  );
}

export default App;
