<script lang="ts">
	import { Search } from 'lucide-svelte';
	import Card from '$lib/components/card.svelte';
	import { onMount } from 'svelte';
	import type { Plan } from '$lib/api/types';
	import CardPlaceholder from '$lib/components/card-placeholder.svelte';
	import { getPartnerInfo } from '$lib/api/endpoints';
	import { mockPartner } from '$lib/mockData';
	import {
		currentTopUpInfo,
		hoverBorderColor,
		hoverColor,
		hoverTextColorLight,
		partnerLogo,
		primaryColor,
		textColor
	} from '$lib/stores';
	import { get } from 'svelte/store';

	let plans: Plan[] = [];
	let visiblePlans: Plan[] = [];
	let showingAll = false;
	let searchQuery = '';
	let loaded = false;
	const initialPlanCount = 4;

	$: filteredPlans = plans.filter((plan) =>
		plan.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	$: visiblePlans = showingAll ? filteredPlans : filteredPlans.slice(0, initialPlanCount);

	function toggleShowAll(): void {
		showingAll = !showingAll;
	}

	function handleSearch(event: Event): void {
		searchQuery = (event.target as HTMLInputElement).value;
		showingAll = false;
	}

	onMount(async () => {
		try {
			// const res = await getPartnerInfo();
			// const data = await res.json();
			primaryColor.set('violet');

			plans = mockPartner.plans.sort(
				(a: Plan, b: Plan) => Number(b.is_recommended) - Number(a.is_recommended)
			);
			loaded = true;
		} catch (error) {
			console.error('Failed to load plans:', error);
			loaded = true;
		}
	});
</script>

{#if $currentTopUpInfo.id != ''}
	<div class="mx-4 my-6 rounded-lg text-center shadow-md">
		<h2 class="p-5">
			Pogledaj status najnovijeg <a
				class="{$textColor} underline transition-colors duration-300 {$hoverTextColorLight}"
				href="/topup/{get(currentTopUpInfo).id}">TopUp</a
			>
		</h2>
	</div>
{/if}

<h1 class="mb-4">Odabretite paket</h1>

<div class="mx-auto my-4 max-w-md">
	<div class="relative flex items-center">
		<input
			class="w-full rounded-md border border-gray-200 py-1 pl-2"
			type="text"
			placeholder="Pretražite pakete"
			on:input={handleSearch}
			bind:value={searchQuery}
		/>
		<div class="absolute right-3 text-gray-400">
			<Search size={18} />
		</div>
	</div>
</div>

<div class="grid w-full grid-cols-1 gap-6 sm:gap-3 md:grid-cols-2">
	{#if !loaded}
		{#each Array(initialPlanCount)}
			<div class="flex justify-center">
				<CardPlaceholder />
			</div>
		{/each}
	{:else}
		{#each visiblePlans as plan}
			<div class="flex justify-center">
				<Card {plan} />
			</div>
		{/each}
	{/if}
</div>

<button
	type="button"
	class="my-5 w-full rounded-xl border-1 border-gray-300 p-3 duration-300 {$hoverBorderColor} {$hoverColor} {$textColor}  hover:text-white"
	on:click={toggleShowAll}
>
	{showingAll ? 'Prikaži manje paketa' : 'Prikaži sve pakete'}
</button>
