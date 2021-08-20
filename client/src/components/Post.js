function Post(props) {
	return (
		<div className="Box">
			<div>
				<span class="mt-0 bold">Anon posted:</span>
			</div>
			<p class="my-0">{props.description}</p>
		</div>
  );
}

export default Post;
