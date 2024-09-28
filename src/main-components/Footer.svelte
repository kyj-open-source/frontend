<script lang="ts">
	import '@/app.css';
	import instagramIcon from '@/assets/images/instagram-icon.svg';
	import twitterIcon from '@/assets/images/twitter-icon.svg';

	interface FooterLinks {
		icon: string;
		link: string;
	}

	let footerLinks: readonly FooterLinks[] = [
		{ icon: instagramIcon, link: 'https://www.instagram.com' },
		{ icon: twitterIcon, link: 'https://www.twitter.com' }
	];
</script>

<div class="h-[150px] flex items-center bg-theme justify-center">
	<ul class="flex justify-center space-x-4">
		{#each footerLinks as footerLink}
			<li>
				<a href={footerLink.link} target="_blank" rel="noopener noreferrer">
					<img src={footerLink.icon} alt="icon" height="35px" width="35px" />
				</a>
			</li>
		{/each}
	</ul>
</div>
