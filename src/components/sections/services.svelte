<Container>
     <div id="services" class="py-12 sm:py-24 border-b mb-12 sm:mb-24">
          <div class="grid md:flex mb-[60px] gap-12 items-center justify-between">
               <h2 class="text-2xl md:text-4xl font-extrabold">Наши работы, на которых <br class="md:block hidden"> мы специализируемся</h2>
               <Button mobile={true} type="button">Все услуги</Button>
          </div>


          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {#each workItems as element}
                    <CardWork 
                         id={element.id}
                         title={element.title}
                         description={element.description}
                         link={element.link}
                         image={element.image}
                    />
               {/each}
          </div>
     </div>
</Container>


<script lang="ts">
     import Container from "@/components/ui/container.svelte";
     import Button from "@/components/ui/button.svelte";
     import CardWork from "@/components/card_work.svelte";

     const workItems = [
          { id: 1, title: 'Исследование и упаковка', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.', link: 'Подробнее', image: '/images/hero.jpeg' },
          { id: 2, title: 'Исследование и упаковка', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.', link: 'Подробнее', image: '/images/hero.jpeg' },
          { id: 3, title: 'Исследование и упаковка', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.', link: 'Подробнее', image: '/images/hero.jpeg' },
     ]
</script>