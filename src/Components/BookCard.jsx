import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import styles from "../Styles/library.module.css";

function BookCard({ book, book: { title, image, author, country, pages, link, id }, setFavorits, favorits }) {
	const [isLiked, setIsLiked] = useState(false);
	const likeHandler = (id) => {
		if (favorits.includes(book)) {
			const newFavorits = favorits.filter((fav) => fav.id != id);
			setFavorits(newFavorits);
			setIsLiked(false);
			return;
		}
		setFavorits([...favorits, book]);
		setIsLiked(true);
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
			<button onClick={() => likeHandler(id)} className={isLiked ? styles.liked : ""}>
				<GoHeartFill />
			</button>
		</li>
	);
}

export default BookCard;
