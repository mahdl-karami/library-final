import { useState } from "react";
import Header from "./Components/Header";
import Library from "./Components/Library";

function App() {
	const [search, setSearch] = useState("");
	return (
		<>
			<Header search={search} setSearch={setSearch} />
      <Library />
		</>
	);
}

export default App;
