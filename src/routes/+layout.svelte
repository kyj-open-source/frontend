<script>
	import Footer from '@/components/common/Footer.svelte';
	import Navbar from '@/components/common/Navbar.svelte';
	import '@/app.css';
</script>

<div class="flex flex-col min-h-screen">
	<!-- Navbar -->
	<header class="fixed w-full">
		<Navbar />
	</header>

	<!-- Main Content -->
	<main class="flex-grow mt-[70px] px-[10vw] py-[40px] bg-[#F2E3D5] h-full">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="w-full">
		<Footer />
	</footer>
</div>
