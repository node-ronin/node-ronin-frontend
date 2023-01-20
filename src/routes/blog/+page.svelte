<script lang="ts">
	import Transition from '$lib//components/Transition.svelte';
	import { fade, fly } from 'svelte/transition';
	import Category from '$lib/components/Category.svelte';
	import Tags from '$lib/components/Tags.svelte';

	import { parseDate } from '$lib//utils';
	import type { Posts } from '$lib//types/posts';
	import { goto } from '$app/navigation';

	export let data: Posts;
</script>

<svelte:head>
	<title>Node Ronin | Blog</title>
	<meta name="author" content="Node Ronin" />
	<meta name="description" content="We are a group of blockchain enthusiasts who are dedicated to supporting the growth and development of the blockchain network. As a validator node, you will play an important role in maintaining the integrity and security of the network, and earn rewards for your participation." />

	<meta property="og:description" content="We are a group of blockchain enthusiasts who are dedicated to supporting the growth and development of the blockchain network. As a validator node, you will play an important role in maintaining the integrity and security of the network, and earn rewards for your participation." />
	<meta property="og:title" content="Node Ronin - Blog | Indonesia Node Validator Community" />
	<meta property="og:image" content="/assets/Ethereum_Monochromatic.png" />
	<meta property="og:url" content="https://noderonin.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Node Ronin - Blog | Indonesia Node Validator Community" />
	<meta name="twitter:image" content="/assets/Ethereum_Monochromatic.png" />
	<meta name="twitter:description" content="We are a group of blockchain enthusiasts who are dedicated to supporting the growth and development of the blockchain network. As a validator node, you will play an important role in maintaining the integrity and security of the network, and earn rewards for your participation." />
</svelte:head>

<div class="columns-2 md:columns-3 gap-2">
	{#each data.posts as post, i}
		<Transition key={post.slug} duration={250 + i * Math.floor(Math.random() * 15)}>
			<div
				style="border-top-color: {post.category.color.hex}"
				class="rounded-lg overflow-hidden bg-base-100 mb-8 border-t-8 border-l-[{post.category.color
					.hex}"
			>
				<div>
					<img src={post.banner.url} class="w-full" alt="" />
				</div>
				<div class="px-2">
					<div>
						<h2 class="text-xl leading-10 my-2">
							<a
								class="text-secondary font-black hover:underline"
								href="/blog/{post.slug}"
								title=""
							>
								{post.title}
							</a>
						</h2>
						{post.shortDescription}
					</div>
					<div class="flex items-center py-2 text-xs pb-4 justify-end">
						<span class="font-semibold">{parseDate(post.publishedAt)}</span>
					</div>
				</div>
			</div>
		</Transition>
	{/each}
	<!-- <div class="col-span-4">
        <Category categories={data.categories} />
        <Tags tags={data.tags} />
    </div> -->
</div>

<style>
</style>
