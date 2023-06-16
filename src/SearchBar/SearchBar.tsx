import React, { useState, ChangeEvent, FormEvent } from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Perform search or any desired action with the search term
		console.log(`Searching for: ${searchTerm}`);
	};

	return (
		<form onSubmit={handleSubmit} className="search-bar">
			<input
				type="text"
				value={searchTerm}
				onChange={handleSearch}
				placeholder="Search..."
				className="search-input"
			/>
			<button type="submit" className="search-button">
				Search
			</button>
		</form>
	);
}

export default SearchBar;
