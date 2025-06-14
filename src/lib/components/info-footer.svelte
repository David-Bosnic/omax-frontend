<script>
	import { Phone, MessageCircleIcon } from 'lucide-svelte';
</script>

<div class="flex flex-col px-3 py-8">
	<h2 class="pb-2 text-center text-gray-400">
		Ukoliko imate tehničkih problema obratite se našem servisu:
	</h2>
	<div class="flex justify-center gap-8">
		<div class="flex gap-2">
			<Phone size={21} class="text-gray-400" />
			<h2 class="text-gray-400">123-456-789</h2>
		</div>
		<div class="flex gap-2">
			<div class="relative h-6 w-6">
				<MessageCircleIcon size={23} class="absolute inset-0 text-gray-400" />
				<Phone
					size={9}
					strokeWidth={3}
					class=" absolute inset-0 top-[7px] left-[6.5px] text-gray-400"
				/>
			</div>
			<h2 class="text-gray-400">123456789</h2>
		</div>
	</div>
</div>
