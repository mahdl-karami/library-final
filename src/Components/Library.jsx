import styles from "../Styles/library.module.css";
import { books } from "../Constant/booksAPI";
import BookCard from "./BookCard";
function Library() {
	return (
		<ul className={styles.booksList}>
			{books.map((b) => (
				<BookCard key={b.id} book={b} />
			))}
		</ul>
	);
}

export default Library;
