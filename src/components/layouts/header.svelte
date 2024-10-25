<header class="fixed top-0 bg-black bg-opacity-50 backdrop-blur-md right-0 z-10 left-0 h-[60px] md:h-[80px] grid items-center md:items-start border-b border-[var(--color-grey-light)]" id="header">
          <Container classes="flex items-center justify-start md:justify-end">
               <div class="hidden md:flex">
                    {#each menuItems as element}
                         <a href={element.href} class="px-4 text-[var(--color-white)] h-[80px] border-b border-[var(--color-grey-light)] hover:border-b-[var(--color-white)] hover:border-b-[1px] flex items-center">
                              {element.label}
                         </a>
                    {/each}
               </div>

               <div class="md:hidden flex">
                    <button 
                         type="button"           
                         on:click={() => toggleMenu()}
                    >
                         <img class="w-[24px]" src="/icons/burger_24x24.svg" alt="burger" />
                    </button>
               </div>

          </Container>
</header>

<div class="w-full md:hidden flex flex-col transition-all z-30 duration-300 bg-white border-l fixed top-0 right-0 bottom-0 sm:w-[350px]" class:is-open={isMenuOpen} class:translate-x-full={!isMenuOpen}>

     <div class="flex items-center justify-end p-4">
          <button type="button" on:click={() => isMenuOpen = !isMenuOpen}>
               <img class="w-[24px]" src="/icons/close_24x24.svg" alt="close" />
          </button>
     </div>
     
     {#each menuItems as element}
          <a href={element.href} class="px-4 text-[var(--color-black)] h-[80px] flex items-center">
               {element.label}
          </a>
     {/each}
</div>

{#if isMenuOpen}
     <button class="fixed md:hidden flex inset-0 bg-black/50 transition-opacity duration-300 z-20"
          on:click={() => toggleMenu()}
          on:keydown={(e) => e.key === 'Escape' && (toggleMenu())} 
          aria-label="Close menu"
          tabindex="0" 
          style="outline: none;"
     >
     </button>
{/if}

<script lang="ts">
     import { Link } from "svelte-routing";
     import Container from "@/components/ui/container.svelte";

     let isMenuOpen = false;

     const menuItems = [
          { label: "Главная", href: "/" },
          { label: "Наши проекты", href: "#projects" },
          { label: "Услуги", href: "#about" },
          { label: "Новости", href: "#services" },
          { label: "Контакты", href: "#subscribe" },
     ]

     function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          if (isMenuOpen) {
               document.body.style.overflow = "hidden"
          } else {
               document.body.style.overflow = "auto"
          }
     }
</script>