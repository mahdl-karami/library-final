import { useState } from "react";
import Header from "./Components/Header";

function App() {
	const [search, setSearch] = useState("");
	return (
		<>
			<Header search={search} setSearch={setSearch} />
		</>
	);
}

export default App;
