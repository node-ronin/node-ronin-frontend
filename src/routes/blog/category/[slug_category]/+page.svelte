<script lang="ts">
    import Category from '$lib/components/Category.svelte'
    import Tags from '$lib/components/Tags.svelte'

	import { parseDate } from '$lib//utils';
	import type { CategoryDetail } from '$lib//types/categoryDetail';
    
    export let data: CategoryDetail;
</script>

<div class="text-sm breadcrumbs p-8">
    <ul>
      <li><a href="/blog/category">Category</a></li> 
      <li>{data.category.title}</li> 
    </ul>
  </div>

{#if data.category}
<div class="grid grid-cols-12 gap-8">
    <div class="col-span-8">
        {#each data.category.posts as post}
            <div class="bg-base-100 px-8 mb-8 pb-8 border-l-8 ">
                <div class="flex justify-between pt-8 items-center">
                    <span class="text-sm font-semibold">{parseDate(post.createdAt)}</span>
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
    <!-- <div class="col-span-4">
        <Category categories={data.categories} />
        <Tags tags={data.tags} />
    </div> -->
</div>
{/if}