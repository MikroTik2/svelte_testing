<script lang="ts">
     export let src: string;
     export let alt: string;
     export let classes: string = '';
     export let isAboveTheFold: boolean = false;
 </script>
 
 <img
     src={src}
     alt={alt}
     class={`h-full object-cover w-full ${classes}`}
     loading={isAboveTheFold ? 'eager' : 'lazy'}
     decoding="async"
 />