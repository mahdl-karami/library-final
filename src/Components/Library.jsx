import styles from "../Styles/library.module.css";
import BookCard from "./BookCard";
import { useState } from "react";
function Library({ visibleBooks }) {
	const [favorits, setFavorits] = useState([]);
	const [slider, setSlider] = useState(false);
	return (
		<div className={styles.library} onScroll={setSlider(false)}>
			{/* Books List */}
			<ul className={styles.booksList}>
				{visibleBooks.map((b) => (
					<BookCard key={b.id} book={b} setFavorits={setFavorits} favorits={favorits} />
				))}
			</ul>
			{/* Liked Books List */}
			<ul className={slider ? `${styles.favSlide} ${styles.fav}` : styles.fav}>
				<div className={styles.slider} onClick={() => setSlider((s) => !s)}></div>
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
					<p>Favorits Is Empty ...</p>
				)}
			</ul>
		</div>
	);
}

export default Library;
