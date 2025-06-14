<script lang="ts">
	import PlanFooter from '$lib/components/plan-footer.svelte';
	import CardCurrentPlan from '$lib/components/card-current-plan.svelte';
	import { selectedPlan, currentTopUpInfo, borderColor, textColor, hoverColor } from '$lib/stores';
	import { postTopUp } from '$lib/api/endpoints';
	import { hoverBorderColor } from '$lib/stores';
	import { goto } from '$app/navigation';
	let userEmail: string = '';
	let ICCID: string = '';

	async function handleSubmit() {
		goto('/success');
		// const res = await postTopUp($selectedPlan.id, ICCID, userEmail);
		// currentTopUpInfo.set({
		// 	id: res.id,
		// 	airwallex_link: res.airwallex_link
		// });
		// setTimeout(() => {
		// 	window.open($currentTopUpInfo.airwallex_link, '_blank');
		// }, 1000);
		// return currentTopUpInfo;
	}
</script>

<div class="relative min-h-screen pb-40">
	<h1 class="mb-[17px]">Identifikacija</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="flex flex-col gap-[29px]">
			<div>
				<h3 class="p-1 font-bold">Email adresa</h3>
				<input
					class="w-full rounded-xs border-2 border-gray-300 p-2 duration-300 {$hoverBorderColor}"
					type="email"
					placeholder="Email adresa"
					bind:value={userEmail}
					required
				/>
			</div>
			<div>
				<h3 class="p-1 font-bold">ICCID</h3>
				<input
					class="w-full rounded-xs border-2 border-gray-300 p-2 duration-300 {$hoverBorderColor}"
					type="text"
					placeholder="ICCID"
					bind:value={ICCID}
					maxlength="7"
					minlength="7"
					required
				/>
			</div>
			<div class="flex max-w-md items-start space-x-2">
				<input type="checkbox" required class="mt-1 h-4 w-4 rounded {$borderColor}" />
				<label for="terms" class="text-sm text-gray-700">
					By checking this box, I agree to the
					<a
						href="https://www.youtube.com/watch?v=XfELJU1mRMg"
						target="_blank"
						class="font-medium {$textColor}  hover:underline"
					>
						Terms of Service
					</a>
					and
					<a
						href="https://www.youtube.com/watch?v=XfELJU1mRMg"
						target="_blank"
						class="font-medium {$textColor}  hover:underline"
					>
						Privacy Policy
					</a>
				</label>
			</div>
			<input
				type="submit"
				class="hover: w-full rounded-md border-2 {$borderColor} p-2 text-sm {$textColor} duration-300 {$hoverColor} hover:text-white"
				value="Nastavi i plati"
			/>
		</div>
	</form>
	<div class="my-4 flex items-center">
		<div class="grow border-t border-gray-200"></div>
		<span class="text-md px-3 text-gray-400">Gdje pronaći ICCID?</span>
		<div class="grow border-t border-gray-200"></div>
	</div>
	<div class="flex flex-col items-center justify-center md:flex-row">
		<img class="w-1/2 max-w-[200px]" src="/images/ICCID_location.png" alt="location of ICCID" />
		<span class="p-10 text-center text-sm text-gray-500">
			Unesite zadnjih 7 cifara serijskog broja kartice. ICCID broj se može pronaći na samoj SIM
			kartici, na pakovanju SIM kartice ili ga je moguće videti u podešavanjima telefona.
		</span>
	</div>
	<CardCurrentPlan />
	<PlanFooter />
</div>
