<Container>
     <div id="service" class="flex py-12 sm:py-24 items-center flex-col">
          <div class="grid text-center gap-10">
               <h2 class="text-2xl md:text-4xl text-[var(--color-dark)] md:leading-[50px] font-bold">Мы создаем мобильные приложения <br class="md:block hidden"> для крупных корпораций</h2>
               <p class="text-[var(--color-grey)] font-extralight text-base">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem <br class="md:block hidden"> Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
          </div>

          <div class="mt-[60px] mb-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {#each cardItems as element}
                    <CardService 
                         title={element.title} 
                         description={element.description}
                         icon={element.icon}
                    />
               {/each}
          </div>

          <Button mobile={true} type="button">
               Все услуги
          </Button>
     </div>
</Container>

<script lang="ts">
     import Button from "@/components/ui/button.svelte";
     import CardService from "@/components/card_service.svelte";
     import Container from "@/components/ui/container.svelte";

     const cardItems = [
          {
               title: "Создание сайтов",
               description: "Lorem Ipsum - это текст- 'рыба', часто используе в печати и вэб-дизайне.",
               icon: "/icons/project_40x40.svg",
          },
          {
               title: "Создание сайтов",
               description: "Lorem Ipsum - это текст- 'рыба', часто используе в печати и вэб-дизайне.",
               icon: "/icons/project_40x40.svg",
          },
          {
               title: "Создание сайтов",
               description: "Lorem Ipsum - это текст- 'рыба', часто используе в печати и вэб-дизайне.",
               icon: "/icons/project_40x40.svg",
          },
     ]
</script>