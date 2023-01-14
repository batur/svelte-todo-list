<script lang="ts">
	import '@picocss/pico';
	import '$styles/global.scss';

	import { browser } from '$app/environment';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
	import { Footer, Header } from '$components';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<Header />
	<main class="container">
		<slot />
	</main>
	<Footer />
</QueryClientProvider>

<style lang="scss" scoped>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		flex-grow: 1;
	}
</style>
