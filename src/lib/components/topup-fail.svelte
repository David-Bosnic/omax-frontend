<script lang="ts">
	import { CircleX } from 'lucide-svelte';
	import { bgColor, borderColor, hoverTextColor } from '$lib/stores';
</script>

<div class="flex flex-col items-center gap-4">
	<CircleX size={80} class="text-red-600" />
	<h1 class="text-3xl text-red-600">Došlo je do greške.</h1>
</div>

<div class="my-4 flex items-center">
	<div class="grow border-t border-gray-200"></div>
	<span class="text-md px-3 text-gray-400">Pokušajte ponovo</span>
	<div class="grow border-t border-gray-200"></div>
</div>

<div class="flex items-center justify-center">
	<img class="w-3/4 max-w-[300px]" src="/images/message_bottle.svg" alt="message in a bottle" />
</div>

<a href="/">
	<button
		class="hover: my-14 w-full rounded-md border-2 {$borderColor} {$bgColor} p-2 text-sm text-white duration-300 hover:bg-white {$hoverTextColor}"
		>Zatvori</button
	>
</a>
<h3 class="text-gray-500">Došlo je do greške pri obradi plaćanja</h3>
<h3 class="text-gray-500">Molimo Vas da provjerite:</h3>
<ul class="ml-10 flex list-disc flex-col py-4">
	<li class="text-gray-500">
		Ispravnost unetih podataka sa kartice (broj kartice, datum isteka, CVV kod)
	</li>
	<li class="text-gray-500">Da li kartica ima dovoljno sredstava</li>
	<li class="text-gray-500">Da li je omogućeno online plaćanje na kartici</li>
	<li class="text-gray-500">Vašu internet konekciju i pokušate ponovo</li>
</ul>
<h3 class="pb-10 text-gray-500">
	Ako problem i dalje traje, kontaktirajte svoju banku ili našu korisničku podršku.
</h3>

<style>
	li {
		font-size: 13px;
	}
</style>
