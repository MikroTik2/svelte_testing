<footer class="bg-[#F6F6F8]" id="footer">
     <Container>
          <div class="py-6 text-center border-t">
               <span class="text-sm font-extralight text-[var(--color-grey)]">(с) {updateCopyright()}. Все права защищены.</span>
          </div>
     </Container>
</footer>

<script lang="ts">
     import updateCopyright from "@/libs/update-copyright.lib";
     import Container from "@/components/ui/container.svelte";
</script>