const submitHandler = (e, search, books, setVisibleBooks) => {
	e.preventDefault();
	const newVisibleBooks = books.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
	setVisibleBooks(newVisibleBooks);
};

export { submitHandler };
