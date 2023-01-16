<script lang="ts">
    import PageTransition from "$lib//components/Transition.svelte";
    import type { PageData } from "../$types";

    export let data: PageData
</script>
<div class="container min-h-screen">
<PageTransition key={data.url} duration={500}>
    <slot></slot>
</PageTransition>
</div>