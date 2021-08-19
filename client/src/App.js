import './App.css';
import Navigation from './Navigation.js'
import Feed from './Feed.js'
import PostCreation from './PostCreation.js'

function App() {
	return (
		<div className="App">
			<Navigation />
			<div className="Center">
				<PostCreation />
				<Feed />
			</div>
		</div>
  );
}

export default App;
