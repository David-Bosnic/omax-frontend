<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import PolicyTermsFooter from '$lib/components/policy-terms-footer.svelte';
	import InfoFooter from '$lib/components/info-footer.svelte';
	import { primaryColor, textColor, borderColor } from '$lib/stores';
	import { onMount } from 'svelte';

	let selectedColor = $state('blue');

	function updatePrimaryColor(color: string) {
		selectedColor = color;
		primaryColor.set(color);
	}

	onMount(() => {
		selectedColor = $primaryColor || 'blue';

		if (import.meta.env.DEV) {
			window.svelteStores = {
				primaryColor
			};
		}
	});

	$effect(() => {
		selectedColor = $primaryColor || 'blue';
	});
</script>

<div class="mx-8">
	<div class="mt-4 mb-6 flex justify-center">
		<div class="flex gap-6 rounded-lg bg-gray-100 p-4">
			<label class="flex cursor-pointer items-center gap-2">
				<input
					type="radio"
					bind:group={selectedColor}
					value="blue"
					on:change={() => updatePrimaryColor('blue')}
					class="h-4 w-4"
				/>
				<span class="font-medium text-blue-600">Blue</span>
			</label>

			<label class="flex cursor-pointer items-center gap-2">
				<input
					type="radio"
					bind:group={selectedColor}
					value="orange"
					on:change={() => updatePrimaryColor('orange')}
					class="h-4 w-4"
				/>
				<span class="font-medium text-orange-600">Orange</span>
			</label>

			<label class="flex cursor-pointer items-center gap-2">
				<input
					type="radio"
					bind:group={selectedColor}
					value="green"
					on:change={() => updatePrimaryColor('green')}
					class="h-4 w-4"
				/>
				<span class="font-medium text-green-600">Green</span>
			</label>
		</div>
	</div>

	<a href="/">
		<div class="mt-[37px] mb-[27px] flex justify-center">
			<!-- <img -->
			<!-- 	class="w-3/4 object-fill p-2 sm:w-[500px]" -->
			<!-- 	src="/images/logo-transparent.png" -->
			<!-- 	alt="brand logo" -->
			<!-- /> -->
			<div
				class="w-3/4 p-2 text-center text-9xl sm:w-[500px] {$textColor} {$borderColor} rounded-2xl border-2 border-solid pb-9"
			>
				Logo
			</div>
		</div>
	</a>
	<div class="xl:px-50">
		{@render children()}
	</div>
	<InfoFooter />
	<PolicyTermsFooter />
</div>
