<script lang="ts">
     import Header from "@/components/layouts/header.svelte";
     import Footer from "@/components/layouts/footer.svelte";
</script>
   
<main>
     <Header />

          <slot></slot>

     <Footer />
</main>