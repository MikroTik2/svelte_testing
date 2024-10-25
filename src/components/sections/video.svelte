<div id="video" class="bg-[#F6F6F8]">
     <Container>
          <div class="py-12 sm:py-24 border-b">
               <div class="text-center mb-12 grid gap-4">
                    <h2 class="text-2xl md:text-4xl font-bold">Видео о нашей работе</h2>
                    <p class="text-base font-extralight">Просто посмотрите, как мы работаем</p>
               </div>

               <div class="h-[430px] px-12 relative flex justify-center items-center">
                    <Image src="/images/video.jpeg" alt="video" classes="absolute inset-0 object-cover" />
                    <button type="button" class="z-10">
                         <img src="/icons/play_60x60.svg" alt="play">
                    </button>
                </div>
          </div>
     </Container>
</div>

<script lang="ts">
     import Container from "@/components/ui/container.svelte";
     import Image from "@/components/ui/image.svelte";
</script>