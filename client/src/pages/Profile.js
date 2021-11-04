import { useParams } from "react-router-dom";
import Feed from '../components/Feed.js'
import Navigation from '../components/Navigation.js'

function Profile() {
	const { username } = useParams();
	return (
		<div className="Home">
			<Navigation />
			<div className="center">
				<p>This is the profile of user {username}</p>
			</div>
		</div>
  );
}

export default Profile;
