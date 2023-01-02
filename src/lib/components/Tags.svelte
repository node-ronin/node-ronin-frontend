<script lang="ts">
    import type {PageData} from '../../routes/blog/$types'
	import type { Tags } from '../types/tag';
    
    export let tags: Tags.Tags;
</script>

<div class="font-semibold text-sm bg-base-100 mt-8">
    <div class="p-4 bg-base-300">Tags</div>
    <div class="p-4">
        {#each tags.data as tag}
            <span class="badge">{tag.attributes.name}</span>
        {/each}
        
    </div>
</div>

