import styles from "../Styles/library.module.css";
import { books } from "../Constant/booksAPI";
import BookCard from "./BookCard";
import { useState } from "react";
function Library() {
	const [favorits, setFavorits] = useState([]);
	return (
		<div className={styles.library}>
			{/* Books List */}
			<ul className={styles.booksList}>
				{books.map((b) => (
					<BookCard key={b.id} book={b} setFavorits={setFavorits} favorits={favorits} />
				))}
			</ul>
			{/* Liked Books List */}
			<ul>
				<li>Favorit Books</li>
				{favorits.length ? (
					<>
						{favorits.map(({ id, image, title }) => (
							<li key={id}>
								<img src={image} alt="Liked Book Image" />
								<p>{title}</p>
							</li>
						))}
					</>
				) : (
					<p>Nothng In Here ...</p>
				)}
			</ul>
		</div>
	);
}

export default Library;
