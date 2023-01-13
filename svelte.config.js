import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$constants: './src/constants',
			$styles: './src/styles/*',
			$hooks: './src/hooks',
			$lib: './src/lib',
			$assets: './src/assets'
		},
		files: {
			hooks: {
				client: './src/hooks',
				server: './src/hooks'
			}
		}
	}
};

export default config;
