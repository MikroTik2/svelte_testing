<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
     export let placeholder: string = '';
     export let modelValue: string = '';
     export let disabled: boolean = false;
 
     export let additionalAttributes: Record<string, any> = {};
 
     const handleInput = (event: Event) => {
         const target = event.target as HTMLInputElement;
         modelValue = target.value;
         dispatch('update:modelValue', modelValue);
     };
 
     const dispatch = createEventDispatcher();
 </script>
 
<input
    class="h-[45px] w-full outline-none pl-4 border border-[#6F6F6F40] rounded-l-full"
    type="email"
    autocomplete="email"
    required
    placeholder={placeholder}
    bind:value={modelValue}
    on:input={handleInput}
    disabled={disabled}
    {...additionalAttributes}
/>
