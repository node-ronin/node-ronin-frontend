<script>
	import { page } from '$app/stores';
	import ThemeChanger from './ThemeChanger.svelte';
	import { list_menu } from '$lib/config';

</script>

<div class="container mx-auto border-b border-base-300">
	<nav class="px-2 my-2">
		<div class="container mx-auto flex flex-wrap items-center justify-between">
			<label for="side-menu" class="md:hidden swap swap-rotate">
  
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" />
				
				<!-- hamburger icon -->
				<svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
				
				<!-- close icon -->
				<svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
				
			  </label>
			<a href="/" class="flex">
				<img src="/assets/node-ronin-wide-logo.png" alt="logo" class="h-10 mr-3" />
			</a>
			<div class="flex md:order-2">
				<div class="relative mr-3 md:mr-0 hidden md:block">
					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<svg
							class="w-5 h-5 text-base-100"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"
							/></svg
						>
					</div>
					<!-- <input
						type="text"
						id="email-adress-icon"
						class="bg-gray-50 border border-gray-300 text-base-100 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
						placeholder="Search..."
					/> -->
				</div>

				<ThemeChanger />

			</div>
			<div
				class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
				id="mobile-menu-3"
			>
				<ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
					{#each list_menu as menu}
						<li>
							<a
								href="{menu.link}"
								class={$page.url.pathname == menu.link ? "text-secondary md:bg-transparent block pl-3 pr-4 py-2 md:p-0 rounded" : "hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-secondary md:p-0"}
								aria-current="page">{menu.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</div>