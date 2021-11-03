import React, { useEffect, useState } from "react";
import PostCreation from './PostCreation'
import Post from './Post.js'

function Feed() {

	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		try {
		const response = await fetch('/api/posts');
		const jsonData = await response.json();

		setPosts(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};
	

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className="Feed">
			<PostCreation />
			{posts.slice(0).reverse().map(post => (
				<Post username={post.username} 
				description={post.body}
				key={post.id}
			/>))}
		</div>
  );
}

export default Feed;
