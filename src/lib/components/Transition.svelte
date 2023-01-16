<script lang="ts">
    import { fly,fade } from 'svelte/transition'
  
    export let key: string
    export let duration: number = 300
  </script>
  
  {#key key}
    <div
      in:fly={{ y: 100, duration, delay: duration }}
      out:fade={{ duration }}
    >
      <slot />
    </div>
  {/key}
  
