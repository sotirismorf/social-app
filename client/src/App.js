import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { AuthProvider } from './contexts/AuthContext'
import Home from './components/Home.js'
import Friends from './components/Friends.js'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp.js'
import NotFound from './pages/NotFound'
import PrivateRoute from "./components/routes/PrivateRoute"
import PublicRoute from "./components/routes/PublicRoute"

function App() {
	return (
		<div className="App">
			<Router>
				<AuthProvider>
					<Switch>
						<PrivateRoute path="/"            exact component={() => <Home />} />
						<PrivateRoute path="/u/:username" exact component={() => <Profile />} />
						<PrivateRoute path="/friends"     exact component={() => <Friends />} />
						<PublicRoute  path="/login"       exact component={() => <SignIn />} />
						<PublicRoute  path="/signup"      exact component={() => <SignUp />} />
						<Route component={() => <NotFound />} />
					</Switch>
				</AuthProvider>
			</Router>
		</div>
  );
}

export default App;
