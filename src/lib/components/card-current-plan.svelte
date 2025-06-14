<script lang="ts">
	import { Globe, Tag, ArrowUpDown, BookOpen } from 'lucide-svelte';
	import { selectedPlan, textColor } from '$lib/stores';
</script>

<div class="max-w my-10 overflow-hidden rounded p-5 shadow-lg">
	<div class="flex justify-between border-b-1 border-gray-300 pb-4">
		<div class="flex items-center gap-2">
			<Globe size={16} class="mt-1 {$textColor}" />
			<div class="flex flex-col text-xs">
				<h3>PLAN</h3>
				<h3 class="font-bold">{$selectedPlan.title}</h3>
			</div>
		</div>
	</div>

	<div class="flex justify-between border-b-1 border-gray-300 py-4">
		<div class="flex items-center gap-2">
			<Tag size={16} class="mt-1 {$textColor}" />
			<div class="flex flex-col text-xs">
				<h3>CIJENA</h3>
				<h3 class="font-bold">{$selectedPlan.retail_price}</h3>
			</div>
		</div>
	</div>

	<div class="flex justify-between border-b-1 border-gray-300 py-4">
		<div class="flex items-center gap-2">
			<ArrowUpDown size={16} class="mt-1 {$textColor}" />
			<div class="flex flex-col text-xs">
				<h3>KOLIČINA PODATAKA</h3>
				<h3 class="font-bold">{$selectedPlan.data_volume_gb} gb</h3>
			</div>
		</div>
	</div>
	<div class="flex flex-col">
		<div class="flex items-center gap-2 py-4">
			<BookOpen size={16} class={$textColor} />
			<h3 class="text-xs">OPIS</h3>
		</div>
		<p class="leading-relaxed">{$selectedPlan.description || 'No description for this plan'}</p>
	</div>
</div>
