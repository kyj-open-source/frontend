<script lang="ts">
	import '@/app.css';

	interface NavOption {
		page: string;
		link: string;
	}

	let navOptions: readonly NavOption[] = [
		{ page: 'Roles', link: '/roles' },
		{ page: 'Jobs', link: '/jobs' },
		{ page: 'Forum', link: '/forum' },
		{ page: 'Resources', link: '/resources' },
		{ page: 'About', link: '/about' }
		// { page: 'Contact', link: '/contact' }
	];
</script>

<nav class="bg-theme h-[80px] flex items-center px-[4vw] text-white">
	<ul class="flex flex-row gap-8">
		{#each navOptions as navOption}
			<li class="text-[1.4em]"><a href={navOption.link}>{navOption.page}</a></li>
		{/each}
	</ul>
</nav>
