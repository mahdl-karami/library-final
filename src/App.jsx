import { useState } from "react";
import Header from "./Components/Header";
import Library from "./Components/Library";
import { books } from "./Constant/booksAPI";

function App() {
	const [search, setSearch] = useState("");
	const [visibleBooks, setVisibleBooks] = useState(books);

	return (
		<>
			<Header search={search} setSearch={setSearch} setVisibleBooks={setVisibleBooks}/>
			<Library visibleBooks={visibleBooks} />
		</>
	);
}

export default App;
