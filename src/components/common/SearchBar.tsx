import React, { useRef, useState } from 'react';
import searchIcon from 'assets/images/icons/search-icon.svg';
import { autoResize, handleKeydown, moveToTop } from 'utils/searchUtils';

const SearchBar: React.FC = () => {
	const [text, setText] = useState('');
	const [isSearchAtTop, setIsSearchAtTop] = useState(false);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	// Callback to update the search position
	const moveToTopCallback = () => {
		setIsSearchAtTop(true);
		if (textareaRef.current) {
			moveToTop(textareaRef.current);
			setText('');
		}
	};

	// Handle button click submission
	const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		moveToTopCallback();
		console.log('Form submitted with text:', text);
		setText('');
	};

	return (
		<div
			className={`absolute left-1/2 w-[50vw] -translate-x-1/2 flex gap-3 overflow-hidden rounded-lg transition-[top] duration-[900ms] ease-in-out ${isSearchAtTop ? 'top-[100px] z-[100]' : 'top-[300px]'
				}`}
		>
			{/* Text input */}
			<textarea
				ref={textareaRef}
				value={text}
				onChange={(e) => {
					setText(e.target.value);
					if (textareaRef.current) {
						autoResize(textareaRef.current);
					}
				}}
				onKeyDown={(e) => {
					if (textareaRef.current) {
						handleKeydown(e, textareaRef.current, moveToTopCallback);
					}
				}}
				rows={1}
				cols={50}
				className={`w-[50vw] p-4 text-xl resize-none outline-none rounded-[9px] border border-theme-d transition-[height] duration-200 ease-in-out max-h-[20em] ${isSearchAtTop ? 'h-[56px]' : 'min-h-[56px]'
					} leading-6 overflow-y-hidden`}
				placeholder="Search"
			/>

			{/* Search button */}
			<button
				className="px-2.5 h-[56px] rounded-[5px] flex items-center justify-center active:bg-theme-d active:scale-95 bg-theme transition-colors duration-200 ease-in-out"
				onClick={onSubmit}
			>
				<img src={searchIcon} alt="search-icon" />
			</button>
		</div>
	);
};

export default SearchBar;