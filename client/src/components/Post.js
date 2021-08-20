function Post(props) {
	return (
		<div className="Box">
			<p class="mt-0">Anon posted:</p>
			<p class="my-0">{props.description}</p>
		</div>
  );
}

export default Post;
