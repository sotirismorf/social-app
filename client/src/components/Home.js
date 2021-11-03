import Feed from './Feed.js'
import Navigation from './Navigation.js'

function Home() {
	return (
		<div className="Home">
			<Navigation pathname="/"/>
			<div className="center">
				<Feed />
			</div>
		</div>
  );
}

export default Home;
