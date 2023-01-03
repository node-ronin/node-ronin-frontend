<script lang="ts">
	import type { CategoryElement } from "../types";

    
    export let categories: CategoryElement[]
</script>

<div class="font-semibold text-sm bg-base-100 ">
    <div class="p-4 bg-base-300">Kategori</div>
    <ul>
        {#each categories as cat}
            <li class="flex justify-between p-4 border-b-2 border-base-200 items-center">
                <span>{cat.title}</span>
                <span style="background-color: {cat.color.hex};" class="badge badge-xs border-none"></span>
            </li>
        {/each}
    </ul>
</div>

