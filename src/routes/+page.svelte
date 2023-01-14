<script lang="ts">
	import { Form } from '$components';
</script>

<main class="container">
	<div class="grid" style="width: 100%;"><div class="form-container"><Form /></div></div>
</main>

<style lang="scss" scoped>
	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex: 1;
		flex-grow: 1;
	}

	.form-container {
		display: flex;

		max-width: 40%;
	}
</style>
