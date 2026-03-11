<script setup lang="ts">

import BaseContainer from "../ui/BaseContainer.vue";
import CatalogInner from "./CatalogInner.vue";
import CatalogPromo from "./CatalogPromo.vue";
</script>

<template>
  <section class="catalog">
    <BaseContainer>
      <h2 class="title text-7xl sm:text-5xl w-full uppercase font-black mb-6">Каталог <span class="font-thin">товаров</span></h2>
      <CatalogInner></CatalogInner>
      <CatalogPromo></CatalogPromo>
    </BaseContainer>
  </section>
</template>

<style scoped>
.catalog {
  margin-bottom: 5rem;
}
</style>