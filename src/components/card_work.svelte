<div class="flex flex-col gap-5">
     <div class="h-[300px]">
          <Image src={image} alt={title}/>
     </div>

     <div class="flex flex-col gap-3">
          <h3 class="font-bold text-lg"><span class="text-[var(--color-primary)]">0{id}.</span> {title}</h3>
          <p class="text-base font-extralight text-[var(--color-grey)]">{description}</p>

          <a class="text-base underline text-[var(--color-primary)]" href={link}>Подробнее</a>
     </div>
</div>

<script lang="ts">
     import Image from "@/components/ui/image.svelte";

     export let title: string;
     export let id: number;
     export let description: string;
     export let link: string;
     export let image: string;
</script>