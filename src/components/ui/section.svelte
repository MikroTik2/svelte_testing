<section id={id} class="flex flex-col items-center justify-center py-5 min-h-screen">
     <slot />
</section>

<script lang="ts">
     export let id: string = '';
</script>