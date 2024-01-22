import { GoHeartFill } from "react-icons/go";

function BookCard({ book: { title, image, author, country, pages } }) {
	return (
		<li>
			<div>
				<img src={image} alt="Book Image" />
				<span>
					<p>{title}</p>
					<p>{author}</p>
					<p>
						{country} | {pages} Page
					</p>
				</span>
			</div>
			<button>
				<GoHeartFill />
			</button>
		</li>
	);
}

export default BookCard;
