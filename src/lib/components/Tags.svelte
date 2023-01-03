<script lang="ts">
    import type {PageData} from '../../routes/blog/$types'
	import type { Tag } from '$lib/types/';
    
    export let tags: Tag[];
</script>

<div class="font-semibold text-sm bg-base-100 mt-8">
    <div class="p-4 bg-base-300">Tags</div>
    <div class="p-4">
        {#each tags as tag}
            <span class="badge">{tag.title}</span>
        {/each}
        
    </div>
</div>

