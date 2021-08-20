import PostCreation from './PostCreation.js'
import Feed from './Feed.js'
import Navigation from './Navigation.js'

function Home() {
	return (
		<div className="Home">
			<Navigation pathname="/"/>
			<div class="center">
				<Feed />
			</div>
		</div>
  );
}

export default Home;
