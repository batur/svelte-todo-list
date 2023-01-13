import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { onMount } from 'svelte';

import i18n from 'sveltekit-i18n';

const languages = {
	en: 'English',
	tr: 'Türkçe'
};

/** @type {import('sveltekit-i18n').Config} */
const config = {
	translations: {
		en: { languages },
		tr: { languages }
	},
	loaders: [
		{
			locale: 'en-US',
			key: 'en-US',
			loader: async () => {
				const module = await import('$assets/locales/en-US.json');
				return module.default;
			}
		},
		{
			locale: 'tr-TR',
			key: 'tr-TR',
			loader: async () => {
				const module = await import('$assets/locales/tr-TR.json');
				return module.default;
			}
		}
	]
};

const useLocale = () => {
	const { t, locale, locales, loading, loadTranslations } = new i18n(config);

	onMount(() => {
		if (browser) {
			loadTranslations(locale.get() || navigator.language);
		}
	});

	return { t, locale, locales, loading };
};

export default useLocale;
