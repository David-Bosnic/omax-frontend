<script lang="ts">
	import { Globe, ArrowUpDown, Calendar, Tag } from 'lucide-svelte';
</script>

<div class="w-11/12 max-w-xl">
	<div class="-mb-9 flex justify-center">
		<div
			class="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-center shadow-md"
		>
			<div
				class="flex h-[65px] w-[65px] animate-pulse items-center justify-center rounded-full bg-gray-200 text-center"
			>
				<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
					<rect width="40" height="40" fill="none" />
					<circle cx="20" cy="20" r="15" fill="#E5E7EB" />
					<path d="M15 15 L25 25 M25 15 L15 25" stroke="#9CA3AF" stroke-width="2" />
				</svg>
			</div>
		</div>
	</div>
	<div class="-mb-1.5 h-3 rounded-t-lg bg-gray-200"></div>
	<div class="animate-pulse overflow-hidden rounded p-10 px-2 shadow-lg">
		<div class="flex flex-col gap-5 px-2">
			<div class="flex justify-between border-b-1 border-gray-200 pb-2">
				<div class="flex items-center">
					<Globe size={16} class="mx-1 text-gray-400" />
					<h4 class="text-gray-500">NAZIV PODATAKA</h4>
				</div>
				<div class="h-5 w-24 rounded bg-gray-300"></div>
			</div>
			<div class="flex justify-between border-b-1 border-gray-200 pb-2">
				<div class="flex items-center">
					<ArrowUpDown size={16} class="mx-1 text-gray-400" />
					<h4 class="text-gray-500">KOLIČINA PODATAKA</h4>
				</div>
				<div class="h-5 w-16 rounded bg-gray-300"></div>
			</div>
			<div class="flex justify-between border-b-1 border-gray-200 pb-2">
				<div class="flex">
					<Calendar size={16} class="mx-1 text-gray-400" />
					<h4 class="text-gray-500">VALIDNOST PAKETA</h4>
				</div>
				<div class="h-5 w-20 rounded bg-gray-300"></div>
			</div>
			<div class="flex justify-between border-b-1 border-gray-200 pb-2">
				<div class="flex">
					<Tag size={16} class="mx-1 text-gray-400" />
					<h4 class="text-gray-500">CIJENA</h4>
				</div>
				<div class="h-5 w-16 rounded bg-gray-300"></div>
			</div>

			<div class="w-full">
				<div class="mb-3 h-10 w-full rounded-md bg-gray-300"></div>
			</div>
		</div>
	</div>
</div>
