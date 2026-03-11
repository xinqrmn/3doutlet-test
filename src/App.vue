<script setup lang="ts">
import AppHeader from "./components/layout/AppHeader.vue";
import MainBanner from "./components/promo/MainBanner.vue";
import CatalogSection from "./components/catalog/CatalogSection.vue";
import ProductsSlider from "./components/products/ProductsSlider.vue";
import FeaturesSection from "./components/features/FeaturesSection.vue";
import ClientsSection from "./components/clients/ClientsSection.vue";
import TelegramSection from "./components/cta/TelegramSection.vue";
import AppFooter from "./components/layout/AppFooter.vue";
</script>

<template>
  <AppHeader/>

  <MainBanner/>
  <CatalogSection/>
  <ProductsSlider/>
  <FeaturesSection/>

  <ClientsSection/>
  <TelegramSection/>

  <AppFooter/>
</template>

<style scoped>

</style>
