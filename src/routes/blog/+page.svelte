<script lang="ts">

    import { fade, fly } from 'svelte/transition';
    import Category from '$lib/components/Category.svelte'
    import Tags from '$lib/components/Tags.svelte'

	import { parseDate } from '$lib//utils';
	import type { Posts } from '$lib//types/posts';
	import { goto } from '$app/navigation';
    
    export let data: Posts;
</script>

<div class="grid grid-cols-12 gap-8 mb-8 h-96 ">
    <div class="col-span-6 p-2 bg-base-100 shadow-sm">
        <div class="w-full h-full bg-accent"></div>
    </div>
    <div class="col-span-6 p-2 bg-base-100 shadow-sm">
        <div class="w-full h-full bg-accent"></div>
    </div>
</div>
<div class="grid grid-cols-12 gap-8 h-64 mb-12">
    <div class="col-span-4 p-2 bg-base-100 shadow-sm">
        <div class="w-full h-full bg-accent"></div>
    </div>
    <div class="col-span-4 p-2 bg-base-100 shadow-sm">
        <div class="w-full h-full bg-accent"></div>
    </div>
    <div class="col-span-4 p-2 bg-base-100 shadow-sm">
        <div class="w-full h-full bg-accent"></div>
    </div>
</div>

{#if data.posts}
<div class="grid grid-cols-12 gap-8">
    <div class="col-span-8">
        {#each data.posts as post}
            <div style="border-left-color: {post.category.color.hex}" class="bg-base-100 px-8 mb-8 pb-8 border-l-8 border-l-[{post.category.color.hex}">
                <div class="flex justify-between pt-8 items-center">
                    <span class="text-sm font-semibold">{parseDate(post.publishedAt)}</span>
                    <span on:click={goto(`/blog/category/${post.category.slug}`)} class="text-sm text px-2 py-1 rounded hover:cursor-pointer hover:bg-neutral">{post.category.title}</span>
                </div>
                <div class="divider"></div>
                <div class="">
                    <h2 class="text-3xl leading-10 md:text-4xl md:leading-46px my-8">
                        <a class="text-secondary font-black hover:underline" href="/blog/{post.slug}" title="">
                            {post.title}
                        </a>
                    </h2>
                    {post.shortDescription}
                </div>
            </div>
        {/each}
    </div>
    <div class="col-span-4">
        <Category categories={data.categories} />
        <Tags tags={data.tags} />
    </div>
</div>
{/if}