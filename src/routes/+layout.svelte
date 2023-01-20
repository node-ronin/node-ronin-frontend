<script>
	import Navigation from "$lib/components/Navigation.svelte";
    import "../app.css";
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
	import { list_menu } from "$lib//config";

    // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
    onMount(() => {
    themeChange(false)
    // 👆 false parameter is required for svelte
    })
</script>
<div class="drawer">
	<input id="side-menu" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
        <Navigation/>
        
        <div class=" pt-4 bg-base-200">
            <slot />
        </div>
	</div> 
	<div class="drawer-side">
	  <label for="side-menu" class="drawer-overlay"></label>
	  <ul class="menu p-4 w-80 bg-base-100 text-base-content">
		<!-- Sidebar content here -->
        {#each list_menu as menu}
		    <li><a href="{menu.link}">{menu.title}</a></li>
        {/each}
	  </ul>
	</div>
  </div>