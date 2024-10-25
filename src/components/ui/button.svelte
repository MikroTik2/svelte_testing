<script lang="ts">
     import { Link } from "svelte-routing";
 
     export let href: string = '';
     export let mobile: boolean = false;
     export let rounded: string = '';
     export let type: "button" | "submit" | "link";
 </script>
 
{#if type === "button"}
        <button 
            type={type} 
            class={`h-[45px] text-base rounded-full inline-flex items-center px-11 transition-all duration-300 justify-center cursor-pointer text-[var(--color-white)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] ${rounded === 'left' ? 'rounded-l-none' : ''} ${mobile ? 'w-full md:w-[inherit]' : ''}`}
        >
            <slot />
        </button>
{/if}

{#if type === 'submit'}
    <button 
        type={type} 
        class={`h-[45px] text-base rounded-full inline-flex items-center px-11 transition-all duration-300 justify-center cursor-pointer text-[var(--color-white)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] ${rounded === 'left' ? 'rounded-l-none' : ''} ${mobile ? 'w-full md:w-[inherit]' : ''}`}
    >
        <slot />
    </button>
{/if}

    {#if type === "link"}
        <Link
            to={href}
            class={`h-[45px] text-base rounded-full inline-flex items-center px-11 justify-center cursor-pointer text-[var(--color-white)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] ${rounded === 'left' ? 'rounded-l-none' : ''} ${mobile ? 'w-full md:w-[inherit]' : ''}`}
        >
            <slot />
        </Link>
    {/if}
