<script lang="ts">
	import { useForm, validators, minLength, required } from 'svelte-use-form';

	const form = useForm();

	let isDescriptionVisible = false;

	function handleDescriptionArea() {
		isDescriptionVisible = !isDescriptionVisible;
	}
</script>

<form use:form>
	<label for="title">
		<p>Title</p>
		<input type="text" name="title" id="title" use:validators={[required, minLength(3)]} />
	</label>
	{#if isDescriptionVisible}
		<label for="description">
			<p>Description</p>
			<textarea
				name="description"
				id="description"
				use:validators={[isDescriptionVisible && required, minLength(3)]}
			/>
		</label>
	{/if}
	<button disabled={!$form.valid} on:click|preventDefault>Add</button>
	<div class="additional-field-controller">
		<button class="secondary outline" on:click={handleDescriptionArea}>
			{#if isDescriptionVisible}
				<span>-</span>
			{:else}
				<span>+</span>
			{/if}
			Description
		</button>
	</div>
</form>

<style lang="scss" scoped>
	form {
		width: 100%;
	}

	textarea {
		width: 100%;
		min-width: 100%;
		max-width: 100%;
		max-height: 10rem;
	}

	.additional-field-controller {
		display: flex;
		justify-content: space-between;
	}
</style>
