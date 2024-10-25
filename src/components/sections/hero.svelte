<div id="hero" class="bg-[url('/images/hero.jpeg')] bg-cover bg-center h-screen">
     <Section>
          <Container>
               <div class="grid text-[var(--color-white)] text-center">
                    <span class="mb-5 text-base">Передовая IT студия</span>
                    <h1 class="mb-10 font-semibold text-2xl md:font-extrabold md:leading-[60px] md:text-5xl">Мы создаем легкие решения сложных задач и проблем</h1>

                    <div>
                         <Button mobile={true} type="button">Наши проекты</Button>
                    </div>
               </div>
          </Container>
     </Section>
</div>

<script lang="ts">
     import Container from "@/components/ui/container.svelte";
     import Button from "@/components/ui/button.svelte";
     import Section from "@/components/ui/section.svelte";
</script>