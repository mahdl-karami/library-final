import { VscGithub } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { submitHandler } from "../Helpers/searchSubmit";
function Header({ search, setSearch }) {
	return (
		<div>
			<form onSubmit={(e) => submitHandler(e)}>
				<input type="text" placeholder="Search" value={search} onChange={({ target }) => setSearch(target.value)} />
				<button type="submit">
					<FaSearch />
				</button>
			</form>
			<a href="https://github.com/mahdl-karami" target="_blank" rel="noreferrer">
				<VscGithub />
			</a>
		</div>
	);
}

export default Header;
