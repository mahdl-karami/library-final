import { GoHeartFill } from "react-icons/go";

function BookCard({ book, book: { title, image, author, country, pages, link, id }, setFavorits, favorits }) {
	const likeHandler = (id) => {
		if (favorits.includes(book)) {
			const newFavorits = favorits.filter((fav) => fav.id != id);
			setFavorits(newFavorits);
			return;
		}
		setFavorits([...favorits, book]);
	};
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
			<button onClick={() => likeHandler(id)}>
				<GoHeartFill />
			</button>
		</li>
	);
}

export default BookCard;
