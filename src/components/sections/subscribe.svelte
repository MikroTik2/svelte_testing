<Container>
     <div id="subscribe" class="py-12 sm:py-24">
          <div class="grid w-full md:w-[560px] gap-6 mx-auto text-center justify-center">
               <div class="grid gap-3">
                    <h3 class="text-lg font-extrabold">Подпишитесь на нашу рассылку</h3>
                    <p class="text-[var(--color-grey)] font-extralight">Полезные статьи, акции, новости - получите все это сейчас!</p>
               </div>
     
               <form class="flex" on:submit={handleSubmit}>
                    <Input
                         bind:modelValue={modelValue}
                         placeholder="Ваш e-mail"
                    />
     
                    <Button rounded="left" type="submit">Подписаться</Button>
               </form>

               <span class="text-[var(--color-grey)] font-extralight">Мы не шлем спам, и передаем никому ваши данные.</span>
          </div>
     </div>
</Container>

<script lang="ts">
     import Container from "@/components/ui/container.svelte";
     import Button from "@/components/ui/button.svelte";
     import Input from "@/components/ui/input.svelte";

     let modelValue: string = '';

     function handleSubmit(event: Event) {
          event.preventDefault();
          alert(modelValue)

          modelValue = '';
     }
</script>