// Function to auto resize the textarea based on input
export function autoResize(textareaRef: HTMLTextAreaElement | null) {
	if (textareaRef) {
		textareaRef.style.height = 'auto';
		textareaRef.style.height = `${textareaRef.scrollHeight}px`;
		if (textareaRef.scrollHeight > 160) {
			textareaRef.style.overflowY = 'scroll'; // Add scroll bar after 8 lines
		} else {
			textareaRef.style.overflowY = 'hidden'; // Hide scroll when under 8 lines
		}
	}
}

// Function to reset the textarea height to a single line
export function resetTextarea(textareaRef: HTMLTextAreaElement | null) {
	if (textareaRef) {
		textareaRef.style.height = '35px'; // Set to one line height
	}
}

// Function to handle keydown events
export function handleKeydown(
	event: KeyboardEvent,
	textareaRef: HTMLTextAreaElement | null,
	moveToTopCallback: () => void
) {
	if (event.key === 'Enter' && !event.shiftKey) {
		event.preventDefault();
		console.log('Submit form or perform action');
		if (textareaRef) {
			moveToTopCallback();
		}
	} else if (event.key === 'Enter' && event.shiftKey) {
		console.log('Shift + Enter detected, adding new line');
	}
}

// Function to handle search button click
export function moveToTop(textareaRef: HTMLTextAreaElement | null) {
	if (textareaRef) {
		resetTextarea(textareaRef);
	}
}
