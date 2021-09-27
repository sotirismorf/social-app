import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { AuthProvider } from './contexts/AuthContext'
import Home from './components/Home.js'
import Friends from './components/Friends.js'
import SignIn from './pages/SignIn.js'
import SignUp from './pages/SignUp.js'
import NotFound from './pages/NotFound'
import PrivateRoute from "./components/PrivateRoute"

function App() {
	return (
		<div className="App">
			<Router>
				<AuthProvider>
				<Switch>
					<PrivateRoute path="/" exact component={() => <Home />} />
					<PrivateRoute path="/friends" exact component={() => <Friends />} />
					<Route path="/login" exact component={() => <SignIn />} />
					<Route path="/signup" exact component={() => <SignUp />} />
					<Route component={() => <NotFound />} />
				</Switch>
				</AuthProvider>
			</Router>
		</div>
  );
}

export default App;
