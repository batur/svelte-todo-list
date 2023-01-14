<script lang="ts">
	import { GithubIcon, TwitterIcon, LinkedinIcon, TelegramIcon } from '$components';

	const links = [
		{
			icon: GithubIcon,
			href: 'https://github.com/batur',
			color: 'white'
		},
		{
			icon: TwitterIcon,
			href: 'https://twitter.com/ta2ulk',
			color: 'white'
		},
		{
			icon: LinkedinIcon,
			href: 'https://www.linkedin.com/in/ta2ulk',
			color: 'white'
		},
		{
			icon: TelegramIcon,
			href: 'https://t.me/ta2ulk',
			color: 'white'
		}
	];
</script>

<footer>
	<div class="container">
		<nav>
			{#each links as item}
				<a href={item.href} role="button" class="outline contrast" target="_blank" rel="noreferrer">
					<svelte:component this={item.icon} color={item.color} />
				</a>
			{/each}
		</nav>
	</div>
</footer>

<style lang="scss" scoped>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		& > a {
			padding: 0.25rem;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all;
			transition-duration: 0.2s;

			&:hover {
				opacity: 0.8;
				filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
			}
		}
	}

	footer {
		padding: 2rem 0;
		display: flex;

		& > .container {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
