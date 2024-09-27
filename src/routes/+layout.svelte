<script>
	import Navbar from '../main-components/Navbar.svelte';
	import '~/app.css';
</script>

<header class="fixed top-0 w-[100vw]">
	<Navbar />
</header>

<div class="mt-[70px] px-[10vw] py-[40px]">
	<slot />
</div>
