<script lang="ts">
	import type { Home } from '$lib/types/posts';
	import Transition from '$lib//components/Transition.svelte';

	export let data: Home;
</script>

<svelte:head>
	<title>Node Ronin</title>
	<meta name="author" content="Node Ronin" />
	<meta name="description" content="We are a group of blockchain enthusiasts who are dedicated to supporting the growth and development of the blockchain network. As a validator node, you will play an important role in maintaining the integrity and security of the network, and earn rewards for your participation." />

	<meta property="og:description" content="We are a group of blockchain enthusiasts who are dedicated to supporting the growth and development of the blockchain network. As a validator node, you will play an important role in maintaining the integrity and security of the network, and earn rewards for your participation." />
	<meta property="og:title" content="Node Ronin | Indonesia Node Validator Community" />
	<meta property="og:image" content="/assets/Ethereum_Monochromatic.png" />
	<meta property="og:url" content="https://noderonin.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Node Ronin | Indonesia Node Validator Community" />
	<meta name="twitter:image" content="/assets/Ethereum_Monochromatic.png" />
	<meta name="twitter:description" content="We are a group of blockchain enthusiasts who are dedicated to supporting the growth and development of the blockchain network. As a validator node, you will play an important role in maintaining the integrity and security of the network, and earn rewards for your participation." />
</svelte:head>

<Transition key="section-1">
	<section class=" bg-base-200">
		<div class="container px-6 py-10 mx-auto">
			<div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
				<img
					class="object-cover h-auto lg:mx-6 lg:w-1/2 rounded-xl "
					src="/assets/Team Work_Monochromatic.png"
					alt="node-ronin"
				/>

				<div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
					<h2 class="text-3xl font-bold sm:text-4xl">Welcome to Node Ronin</h2>
					<p class="mt-4">
						​Welcome to our validator node community! We are a group of blockchain enthusiasts who
						are dedicated to supporting the growth and development of the blockchain network. As a
						validator node, you will play an important role in maintaining the integrity and
						security of the network, and earn rewards for your participation.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class=" bg-base-200">
		<div class="container px-6 py-10 mx-auto">
			<div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
				<img
					class="object-cover h-auto lg:mx-6 lg:w-1/2 rounded-xl lg:order-last"
					src="/assets/Ethereum_Monochromatic.png"
					alt="validator-node"
				/>

				<div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
					<h2 class="text-3xl font-bold sm:text-4xl">​What is a validator node?</h2>
					<p class="mt-4">
						​A validator node is a type of node in a blockchain network that is responsible for
						verifying transactions and adding them to the blockchain. As a validator, you will stake
						a certain amount of tokens to participate in the network, and will earn a share of the
						network's rewards for your participation.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class=" bg-base-200">
		<div class="container px-6 py-10 mx-auto">
			<div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
				<img
					class="object-cover h-auto lg:mx-6 lg:w-1/2 rounded-xl "
					src="/assets/Team meeting_Monochromatic.png"
					alt="comm-review"
				/>

				<div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
					<h2 class="text-3xl font-bold sm:text-4xl">​Community Overview</h2>
					<p class="mt-4">
						​Our community is built on the principles of decentralization, transparency, and
						security. We believe that by working together, we can create a stronger and more secure
						blockchain network. We are always looking for new members to join our community and
						become validator nodes.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class=" bg-base-200">
		<div class="container px-6 py-10 mx-auto">
			<div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
				<img
					class="object-cover h-auto lg:mx-6 lg:w-1/2 rounded-xl lg:order-last"
					src="/assets/Brainstorming-session _Monochromatic.png"
					alt="edu-resources"
				/>

				<div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
					<h2 class="text-3xl font-bold sm:text-4xl ">Education Resources:</h2>
					<ul class="max-w-md space-y-1 list-inside mt-4 ">
						<li class="flex items-center">
							<svg
								class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/></svg
							>
							Guide to Setting Up a Validator Node
						</li>
						<li class="flex items-center">
							<svg
								class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/></svg
							>
							Understanding Blockchain Technology
						</li>
						<li class="flex items-center">
							<svg
								class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/></svg
							>
							Frequently Asked Questions
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="container mb-20">
		<div class=" text-center py-7">
			<h2 class="text-3xl font-bold sm:text-4xl">Active Testnet</h2>
			<p class="mt-4 neutral">
				This is the list of current Active Testnets we are participating in as validators or node
				operators.
			</p>
		</div>
		<div class="grid gap-2 grid-cols-2 md:grid-cols-5 pb-4">
			{#each data.homes as data}
				<div class="w-full flex justify-center items-center flex-col">
					<span class="p-5 rounded-full bg-info">
						<a href="https://google.com" target="_blank">
							<img src={data.image.url} width="126" alt="inery-logo" class="w-full h-8" />
						</a>
					</span>
					<p class="text-lg font-semibold">{data.title}</p>
				</div>
			{/each}
		</div>
	</section>
</Transition>
