import { BiLike , BiDislike , BiComment } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa'
import { IconContext } from 'react-icons';

function Post(props) {
	return (
		<div className="Box">
				<span className="mt-0 mb-5 bold">{props.username} posted:</span>
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
