import React, { useState, ChangeEvent, FormEvent } from 'react';
import './SearchBar.css';

export interface SearchBarConfig {
	isFixed: boolean
}

export default function SearchBar({
	isFixed = false
}: SearchBarConfig
) {
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
				placeholder="Buscar produtos..."
				className="search-input"
			/>
			<button type="submit" className="search-button">
				Procurar
			</button>
		</form>
	);
}
