import { Link } from 'react-router-dom';
import { BiLike , BiDislike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa'
import { IconContext } from 'react-icons';

function Post(props) {
	return (
		<div className="Box">
			<div className="Line">
				<Link className="mr-10" to="/profile">
					<img src="https://avatars.githubusercontent.com/u/82419995?s=40&amp;u=2b351c7ed956e79ade0108660a0f449e8f761f18&amp;v=4" className="circle" width="32" height="32" alt="dotfiles" aria-label="Repository"></img>
				</Link>
				<span className="mt-0 bold">{props.username} posted:</span>
			</div>
				<p className="my-0 mb-10 tl">{props.description}</p>
			<div>
				<IconContext.Provider value={{ size:"2em", className: "react-icons" }}>
					<button><BiLike /></button>
					<button><BiDislike /></button>
					<button><FaRegComment /></button>	
				</IconContext.Provider>
			</div>
		</div>
  );
}

export default Post;
