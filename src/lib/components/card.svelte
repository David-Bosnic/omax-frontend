<script lang="ts">
	import type { Plan } from '$lib/api/types';
	import {
		bgColor,
		borderColor,
		hoverColor,
		hoverTextColor,
		selectedPlan,
		textColor
	} from '$lib/stores';
	import { Globe, ArrowUpDown, Calendar, Tag } from 'lucide-svelte';

	export let plan: Plan = {
		id: '',
		days_valid: '',
		retail_price: '',
		title: '',
		description: '',
		data_volume_gb: 0,
		cover_image: '',
		coverage: [''],
		is_recommended: false
	};
</script>

<div class="w-11/12 max-w-xl">
	{#if !plan.is_recommended}
		<div class="-mb-9 flex justify-center">
			<div
				class="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-center"
			>
				<div
					class="flex h-[65px] w-[65px] items-center justify-center rounded-full {$bgColor} text-center"
				>
					<div class="w-10/12 object-contain font-bold text-white">Plan Logo</div>
				</div>
			</div>
		</div>
		<div class=" -mb-1.5 h-3 rounded-t-lg {$bgColor}"></div>
		<div class="overflow-hidden rounded p-10 px-2 shadow-lg">
			<div class="flex flex-col gap-5 px-2">
				<div class="flex justify-between border-b-1 border-gray-200 pb-2">
					<div class="flex items-center">
						<Globe size={16} class="mx-1 {$textColor}" />
						<h4>NAZIV PODATAKA</h4>
					</div>
					<h2 class="font-bold">{plan.title}</h2>
				</div>
				<div class="flex justify-between border-b-1 border-gray-200 pb-2">
					<div class="flex items-center">
						<ArrowUpDown size={16} class="mx-1 {$textColor}" />
						<h4>KOLIČINA PODATAKA</h4>
					</div>
					<h2>{plan.data_volume_gb + 'gb'}</h2>
				</div>
				<div class="flex justify-between border-b-1 border-gray-200 pb-2">
					<div class="flex">
						<Calendar size={16} class="mx-1 {$textColor}" />
						<h4>VALIDNOST PAKETA</h4>
					</div>
					<h2>{plan.days_valid + ' dana'}</h2>
				</div>
				<div class="flex justify-between border-b-1 border-gray-200 pb-2">
					<div class="flex">
						<Tag size={16} class="mx-1 {$textColor}" />
						<h4>CIJENA</h4>
					</div>
					<h2>{plan.retail_price}</h2>
				</div>

				<a href="/identification" class="w-full">
					<button
						on:click={() => ($selectedPlan = plan)}
						type="submit"
						class="mb-3 w-full cursor-pointer rounded-md border-1 {$borderColor} py-2 {$textColor} duration-300 {$hoverColor} hover:text-white"
						>Kupi paket</button
					>
				</a>
			</div>
		</div>
	{:else}
		<div class="-mb-9 flex justify-center">
			<div
				class="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-center"
			>
				<div
					class="flex h-[65px] w-[65px] items-center justify-center rounded-full {$bgColor} text-center"
				>
					<div class="w-10/12 object-contain font-bold text-white">Plan Logo</div>
				</div>
			</div>
		</div>
		<div class=" -mb-1.5 h-4 rounded-t-lg {$bgColor}"></div>
		<div class="overflow-hidden rounded {$bgColor} p-10 px-2 shadow-lg">
			<div class="flex flex-col gap-5 px-2 text-white">
				<div class="flex justify-between border-b-1 border-white pb-2">
					<div class="flex items-center">
						<Globe size={16} class="mx-1 " />
						<h4>NAZIV PODATAKA</h4>
					</div>
					<h2 class="font-bold">{plan.title}</h2>
				</div>
				<div class="flex justify-between border-b-1 border-white pb-2">
					<div class="flex">
						<ArrowUpDown size={16} class="mx-1 " />
						<h4>KOLIČINA PODATAKA</h4>
					</div>
					<h2>{plan.data_volume_gb + 'gb'}</h2>
				</div>
				<div class="flex justify-between border-b-1 border-white pb-2">
					<div class="flex">
						<Calendar size={16} class="mx-1 " />
						<h4>VALIDNOST PAKETA</h4>
					</div>
					<h2>{plan.days_valid + ' dana'}</h2>
				</div>
				<div class="flex justify-between border-b-1 border-white pb-2">
					<div class="flex">
						<Tag size={16} class="mx-1 " />
						<h4>CIJENA</h4>
					</div>
					<h2>{plan.retail_price}</h2>
				</div>

				<a href="/identification" class="w-full">
					<button
						on:click={() => ($selectedPlan = plan)}
						type="submit"
						class="mb-3 w-full cursor-pointer rounded-md border-1 border-white py-2 text-white duration-300 hover:bg-white {$hoverTextColor}"
						>Kupi paket</button
					>
				</a>
			</div>
		</div>
	{/if}
</div>
