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

<!-- <div class="grid grid-cols-4 gap-4 mb-4 h-96 ">
    <div class="col-span-2 p-2 bg-base-100 shadow-sm">
        <div class="w-full h-full bg-accent"></div>
    </div>
    <div class="col-span-2 p-2 bg-base-100 shadow-sm">
        <div class="w-full h-full bg-accent"></div>
    </div>
</div>
<div class="grid grid-cols-12 gap-4 h-64 mb-4">
    {#each Array(3) as _, i}
        <div class="col-span-4 p-2 bg-base-100 shadow-sm rounded-lg overflow-hidden " >
            <div class="w-full h-full bg-accent"></div>
        </div>
    {/each}
</div> -->

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
