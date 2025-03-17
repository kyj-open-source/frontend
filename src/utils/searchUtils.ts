// Function to auto-resize the textarea based on input
export function autoResize(textarea: HTMLTextAreaElement | null) {
  if (textarea) {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > 160 ? "scroll" : "hidden";
  }
}

// Function to reset the textarea height to a fixed 56px (to match the button)
// and hide the scrollbar by resetting overflowY to hidden.
export function resetTextarea(textarea: HTMLTextAreaElement | null) {
  if (textarea) {
    textarea.style.height = "56px";
    textarea.style.overflowY = "hidden";
  }
}

// Function to handle keydown events
export function handleKeydown(
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  textarea: HTMLTextAreaElement | null,
  moveToTopCallback: () => void
) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    moveToTopCallback();
  } else if (event.key === "Enter" && event.shiftKey) {
    console.log("Shift + Enter detected, adding new line");
  }
}

// Function to handle search button click (calls resetTextarea)
export function moveToTop(textarea: HTMLTextAreaElement | null) {
  if (textarea) {
    resetTextarea(textarea);
  }
}
