<script lang="ts">
	import CardCurrentPlan from '$lib/components/card-current-plan.svelte';
	import { LoaderCircle } from 'lucide-svelte';
	import { currentTopUpInfo, textColor } from '$lib/stores';
</script>

<LoaderCircle class="{$textColor} h-[75px] w-full animate-spin" />
<div class="my-4 flex items-center">
	<div class="grow border-t border-gray-200"></div>
	<span class="text-md px-3 text-gray-400">Kupili ste paket</span>
	<div class="grow border-t border-gray-200"></div>
</div>
<label for="terms" class="text-center text-sm text-gray-700">
	If the airwallex didn't appear automatically, click here
	<a
		href={$currentTopUpInfo.airwallex_link}
		target="_blank"
		class="font-medium {$textColor} hover:underline"
	>
		here
	</a>
	to open the page manually.
</label>
<CardCurrentPlan />
