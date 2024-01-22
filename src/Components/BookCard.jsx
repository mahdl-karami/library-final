import { GoHeartFill } from "react-icons/go";

function BookCard({ book: { title, image, author, country, pages, link } }) {
	return (
		<li>
			<div>
				<a href={link}>
					<img src={image} alt="Book Image" />
				</a>
				<span>
					<p>
						<a href={link}>{title}</a>
					</p>
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
