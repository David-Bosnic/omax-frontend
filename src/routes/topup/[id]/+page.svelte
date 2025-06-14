<script lang="ts">
	import PollTopup from '$lib/components/poll-topup.svelte';
	import TopupFail from '$lib/components/topup-fail.svelte';
	import TopupSuccess from '$lib/components/topup-success.svelte';
	import { status } from '$lib/stores';
	import { get } from 'svelte/store';
	import { getTopUpStatus } from '$lib/api/endpoints';
	import { onDestroy, onMount } from 'svelte';

	let intervalId: number | undefined;
	let currentStatus: string = '';

	async function pollForStatus() {
		try {
			const res = await getTopUpStatus();
			const data = await res.json();
			status.set(data.status);
			if (get(status) == '1') {
				clearInterval(intervalId);
			}
			currentStatus = get(status);
		} catch (error) {
			console.error('Error polling for status:', error);
		}
	}

	onMount(() => {
		pollForStatus();
		intervalId = setInterval(pollForStatus, 4000);
	});

	onDestroy(() => {
		if (intervalId !== undefined) {
			clearInterval(intervalId);
			status.set('');
		}
	});
</script>

{#if currentStatus != '1'}
	{#if currentStatus == '2'}
		<TopupFail />
	{/if}
	<PollTopup />
{/if}

{#if currentStatus == '1'}
	<TopupSuccess />
{/if}
