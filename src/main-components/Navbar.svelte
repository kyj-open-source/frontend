<script lang="ts">
	import '@/app.css';

	interface NavOption {
		page: string;
		link: string;
	}

	let navOptions: readonly NavOption[] = [
		{ page: 'Home', link: '/' },
		{ page: 'About', link: '/about' }
		// { page: 'Contact', link: '/contact' }
	];
</script>

<nav
	class="bg-theme h-[70px] flex items-center px-[4vw] text-white shadow-[rgba(50,50,93,0.3)_0px_6px_12px_2px]"
>
	<ul class="flex flex-row gap-8">
		{#each navOptions as navOption}
			<li class="text-[1.4em]"><a href={navOption.link}>{navOption.page}</a></li>
		{/each}
	</ul>
</nav>
