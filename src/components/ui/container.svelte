<script lang="ts">
     export let classes: string = '';
</script>
 
<div class={`max-w-[1120px] w-11/12 mx-auto ${classes}`} {...$$restProps}>
     <slot />
</div>