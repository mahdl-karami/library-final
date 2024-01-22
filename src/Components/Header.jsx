import { VscGithub } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import styles from "../Styles/header.module.css";
import { submitHandler } from "../Helpers/searchSubmit";
import { books } from "../Constant/booksAPI";

function Header({ search, setSearch, setVisibleBooks }) {
	return (
		<header className={styles.header}>
			<form onSubmit={(e) => submitHandler(e, search, books, setVisibleBooks)}>
				<input name="search" type="text" placeholder="Search" value={search} onChange={({ target }) => setSearch(target.value)} />
				<button type="submit">
					<FaSearch />
				</button>
			</form>
			<a href="https://github.com/mahdl-karami" target="_blank" rel="noreferrer">
				<VscGithub />
			</a>
		</header>
	);
}

export default Header;
