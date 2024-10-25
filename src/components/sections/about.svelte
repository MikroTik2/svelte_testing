<div id="about" class="bg-[#F6F6F8]">
     <Container>
          <div class="py-12 sm:py-24 border-b">
               <div class="grid gap-12 grid-cols-1 md:grid-cols-2">
                    <div class="flex flex-col gap-6 justify-center">
                         <h2 class="text-[var(--color-dark)] text-2xl md:text-4xl font-extrabold">Высокие стандарты разработки</h2>
                         <p class="text-[var(--color-grey)] font-extralight">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI века. </p>

                         <a class="underline text-[var(--color-primary)]" href="/">Подробнее о компании</a>
                    </div>

                    <div class="h-[400px]">
                         <Image src="/images/about.jpeg" alt="about"/>
                    </div>
               </div>
          </div>

          <div class="py-12 sm:py-24">
               <div class="grid gap-12 px-12 items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {#each projectItems as element}
                         <div class="flex text-center items-center flex-col gap-4">
                              <div class="flex gap-4 items-center">
                                   <div class="w-[30px]">
                                        <Image src="{element.icon}" alt="project"/>
                                   </div>
                                   <span class="text-4xl">{element.number}</span>
                              </div>

                              <span class="text-base text-[var(--color-grey)]">{element.title}</span>
                         </div>
                    {/each}
               </div>
          </div>
     </Container>
</div>

<script lang="ts">
     import Image from "@/components/ui/image.svelte";
     import Container from "@/components/ui/container.svelte";

     const projectItems = [
          { icon: '/icons/web_programming_30x30.svg', title: 'Our projects', number: 125 },
          { icon: '/icons/web_programming_30x30.svg', title: 'Our projects', number: 125 },
          { icon: '/icons/web_programming_30x30.svg', title: 'Our projects', number: 125 },
          { icon: '/icons/web_programming_30x30.svg', title: 'Our projects', number: 125 },
          { icon: '/icons/web_programming_30x30.svg', title: 'Our projects', number: 125 },
     ]
</script>