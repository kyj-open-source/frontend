'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Skill } from '@/lib/types';

interface SkillAutocompleteProps {
	onSelect: (skill: Skill) => void;
}

export default function SkillAutocomplete({ onSelect }: SkillAutocompleteProps) {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState<Skill[]>([]);
	const [showDropdown, setShowDropdown] = useState(false);

	useEffect(() => {
		if (!query) {
			setResults([]);
			return;
		}

		const timeout = setTimeout(async () => {
			try {
				const res = await axios.get(`/api/skills?q=${query}`);
				setResults(res.data);
				setShowDropdown(true);
			} catch (err) {
				console.error('Failed to fetch skills', err);
			}
		}, 300); // debounce

		return () => clearTimeout(timeout);
	}, [query]);

	return (
		<div className="relative">
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="w-full border rounded-lg p-2"
				placeholder="Search skills..."
			/>
			{showDropdown && results.length > 0 && (
				<ul className="absolute z-10 bg-white border rounded-lg mt-1 w-full max-h-48 overflow-y-auto shadow">
					{results.map((skill) => (
						<li
							key={skill.id}
							onClick={() => {
								onSelect(skill);
								setQuery('');
								setResults([]);
								setShowDropdown(false);
							}}
							className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
						>
							{skill.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
