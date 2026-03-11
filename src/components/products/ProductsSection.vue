<script setup lang="ts">
import BaseContainer from "../ui/BaseContainer.vue";
import ProductsSlider from "./ProductsSlider.vue";
import {ArrowUpRight} from "lucide-vue-next";

</script>

<template>
  <section class="products">
    <BaseContainer>
      <h2 class="title text-7xl sm:text-5xl w-full font-black uppercase flex items-center gap-3 mb-10">популярные модели
        <ArrowUpRight :size="48"/>
      </h2>

      <ProductsSlider></ProductsSlider>
    </BaseContainer>
  </section>
</template>

<style scoped>
.products {
  margin-bottom: 5rem;
}
</style>