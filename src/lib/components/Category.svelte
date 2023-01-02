<script lang="ts">
	import type { Category } from '../types/category';
    
    export let categories: Category.Categories
</script>

<div class="font-semibold text-sm bg-base-100 ">
    <div class="p-4 bg-base-300">Kategori</div>
    <ul>
        {#each categories.data as cat}
            <li class="flex justify-between p-4 border-b-2 border-base-200 items-center">
                <span>{cat.attributes.name}</span>
                <span style="background-color: {cat.attributes.color};" class="badge badge-xs border-none"></span>
            </li>
        {/each}
    </ul>
</div>

