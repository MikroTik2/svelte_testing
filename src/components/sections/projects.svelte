<div id="projects" class="bg-[#F6F6F8]">
     <Container>
          <div class="py-12 sm:py-24">
               <div class="grid mb-12 gap-8 text-center">
                    <h2 class="text-2xl md:text-4xl font-extrabold">Наши проекты</h2>
                    <p class="text-base font-extralight">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem <br class="md:block hidden"> Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
               </div>

               <div class="grid mb-12 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {#each projectItems as element }
                         <div class="h-[255px]">
                              <Image src={element.image} alt="project"/>
                         </div>
                    {/each}
               </div>

               <div class="flex justify-center">
                    <Button type="button">Все проекты</Button>
               </div>
          </div>
     </Container>
</div>

<script lang="ts">
     import Image from "@/components/ui/image.svelte";
     import Container from "@/components/ui/container.svelte";
     import Button from "@/components/ui/button.svelte";

     const projectItems = [
          { image: '/images/project.jpeg' },
          { image: '/images/project.jpeg' },
          { image: '/images/project.jpeg' },
          { image: '/images/project.jpeg' },
     ]
</script>