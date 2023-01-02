<script lang="ts">
    import type {PageData} from './$types'
    import Toc from 'svelte-toc'
	import { afterUpdate, onMount, beforeUpdate } from 'svelte';
    import { parseDate } from '$lib//utils';
    import Giscus from '@giscus/svelte'
    import Category from '$lib//components/Category.svelte';
    import Tags from '$lib//components/Tags.svelte';

    export let data: PageData;

    onMount(() => {
        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://noderonin.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();

        clipboard('pre>code', {
            template: '<button class="btn-square absolute z-2 btn btn-accent btn-sm btn-outline top-2 right-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg></button>'
        })
    })

</script>

{#if data.post}
    <div class="col-span-4 lg:col-span-5">
        <div class="flex justify-between items-center pt-6">
            <div class="text-sm font-semibold">{parseDate(data.post.data.attributes.publishedAt)}</div>
            <div class="badge badge-[{data.post.data.attributes.category.data.attributes.color}]">{data.post.data.attributes.category.data.attributes.name}</div>
        </div>
        <div class="divider"></div> 
        <div class="mb-10">
            <div class="text-3xl leading-10 md:text-42px md:leading-62px text-secondary font-black my-6.5  mb-2">{data.post.data.attributes.title}</div>
            <div class="flex text-xs">                
                {#each data.post.data.attributes.tags.data as tag}
                    <div class="badge">{tag.attributes.name}</div>
                {/each}
            </div>
        </div>
        <div>
            <div class="prose max-w-none prose-img:mx-auto">
                        
                {@html data.post.data.attributes.body
                    .replaceAll('<code>','<code class="">')
                    .replaceAll("<pre>","<div class='relative'><pre class='scrollbar-thin scrollbar-thumb-neutral-focus scrollbar-track-neutral-content'>")
                    .replaceAll("</pre>","</pre></div>")
                }
            </div>
        </div>
    </div>
    <div class="col-span-3 lg:col-span-2 p-5 md:p-0">
        <Toc titleTag="strong" />
    </div>

    <div class="col-span-5">
        <Giscus 
        repo="node-ronin/giscus"
        repoId="R_kgDOItVr0A"
        category="General"
        categoryId="DIC_kwDOItVr0M4CTXey"
        mapping="url"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="en"
        />
    </div>
{/if}
