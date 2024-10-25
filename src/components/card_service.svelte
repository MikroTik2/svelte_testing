<div class="sm:flex text-center items-center sm:items-start sm:text-start grid lg:h-[140px] gap-4">
     <div class="flex justify-center sm:justify-start">
          <div class="w-[110px] p-2 h-[110px] flex items-center justify-center rounded-full border">
               <div class="w-[90px] h-[90px] flex items-center justify-center rounded-full border border-[var(--color-primary)]">
                    <img class="w-10" src={icon} alt={title}>
               </div>
          </div>
     </div>

     <div class="flex flex-col justify-end">
          <h3 class="text-lg font-bold">{title}</h3>
          <span class="font-extralight text-[var(--color-grey)]">{description}</span>
     </div>
</div>

<script lang="ts">
     export let icon: string;
     export let title: string;
     export let description: string;
</script>