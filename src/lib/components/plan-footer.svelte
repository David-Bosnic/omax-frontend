<script lang="ts">
	import { borderColor, hoverTextColor, selectedPlan, textColor } from '$lib/stores';
	import { bgColor } from '$lib/stores';
</script>

<footer
	class="opacity footerBackground fixed right-4 bottom-56 left-4 z-50 mx-auto max-w-3xl rounded-lg border border-gray-200 bg-gray-200 px-10 pt-3.5 shadow-lg"
>
	<div class="py-4">
		<div class="flex flex-col gap-3 {$textColor}">
			<div class="mb-3 flex items-center justify-between">
				<h2 class="font-bold">ODABRANO:</h2>
				<h2>{$selectedPlan.title || 'title'}</h2>
				<h2>{$selectedPlan.retail_price || 'price'}</h2>
			</div>

			<a href="/">
				<button
					class="hover: w-full rounded-md border-2 {$borderColor} {$bgColor} p-2 text-sm text-white duration-300 hover:bg-white {$hoverTextColor}"
				>
					Odaberi drugi paket
				</button>
			</a>
		</div>
	</div>
</footer>

<style>
	.footerBackground {
		backdrop-filter: blur(8px);
		background: rgba(243, 244, 246, 0.5);
	}
</style>
