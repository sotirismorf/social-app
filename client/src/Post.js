import './App.css';

function Post(props) {
	return (
		<div className="Box">
			<h3>Anon posted:</h3>
			<h1>{props.description}</h1>
		</div>
  );
}

export default Post;
