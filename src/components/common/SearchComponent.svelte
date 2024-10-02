<script lang="ts">
	import searchIcon from '@/assets/images/icons/search-icon.svg';
	import { autoResize, handleKeydown, moveToTop } from '@/utils/searchUtils';

	let text: string = '';
	let textareaRef: HTMLTextAreaElement | null = null;
	let isSearchAtTop = false;

	// Callback to update `isSearchAtTop`
	function moveToTopCallback() {
		isSearchAtTop = true;
		if (textareaRef) {
			moveToTop(textareaRef);
			text = '';
		}
	}

	// Function to handle form submission
	function onSubmit(event: Event) {
		event.preventDefault();
		moveToTopCallback();
		console.log('Form submitted with text:', text);
		text = '';
	}
</script>

<div
	class="fixed-container flex w-fit gap-3 overflow-hidden rounded-lg transition-all duration-1500"
	class:navbar-search={isSearchAtTop}
>
	<!-- Text input -->
	<textarea
		bind:this={textareaRef}
		bind:value={text}
		on:input={() => {
			if (textareaRef) autoResize(textareaRef);
		}}
		on:keydown={(e) => {
			if (textareaRef) handleKeydown(e, textareaRef, moveToTopCallback);
		}}
		rows="1"
		cols="50"
		class="input-text w-[50vw] p-4 text-xl resize-none outline-none rounded-[5px]"
		placeholder="Search"
	></textarea>

	<!-- Search button -->
	<button class="bg-white px-2.5 rounded-[5px]" on:click={onSubmit}>
		<img src={searchIcon} alt="search-icon" />
	</button>
</div>

<style>
	.fixed-container {
		position: absolute;
		top: 300px;
		left: 50%;
		width: 50vw;
		transform: translateX(-50%);
		transition: top 0.9s ease-in-out;
	}

	.navbar-search {
		top: 100px;
		width: 50vw;
		height: fit-content;
		z-index: 100;
	}

	textarea {
		transition: height 0.2s ease-in-out;
		max-height: 20em;
		min-height: fit-content;
		line-height: 24px;
		overflow-y: hidden;
	}
</style>
