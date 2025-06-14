<script lang="ts">
	import { CircleCheck } from 'lucide-svelte';
	import CardCurrentPlan from '$lib/components/card-current-plan.svelte';
	import { bgColor, borderColor, hoverTextColor } from '$lib/stores';
</script>

<div class="flex flex-col items-center gap-4">
	<CircleCheck size={80} class="text-green-600" />
	<h1 class="text-3xl text-green-600">Uspješno!</h1>
</div>

<div class="my-4 flex items-center">
	<div class="grow border-t border-gray-200"></div>
	<span class="text-md px-3 text-gray-400">Kupili ste paket</span>
	<div class="grow border-t border-gray-200"></div>
</div>
<CardCurrentPlan />

<a href="/">
	<button
		class="mt-8 w-full rounded-md border-2 {$borderColor} {$bgColor} p-2 text-sm text-white duration-300 hover:bg-white {$hoverTextColor}"
		>Zatvori</button
	>
</a>
