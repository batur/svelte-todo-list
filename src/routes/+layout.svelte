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
	<slot />
	<Footer />
</QueryClientProvider>
