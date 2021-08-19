import React, { useEffect, useState } from "react";
import './App.css';
import Post from './Post.js'

function Feed() {

  const [posts, setPosts] = useState([]);


  const getPosts = async () => {
    try {
      const response = await fetch("https://www.sotirismorfakidis.xyz/api/posts");
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
			{posts.slice(0).reverse().map(post => (<Post description={post.description}/>))}
		</div>
  );
}

export default Feed;
