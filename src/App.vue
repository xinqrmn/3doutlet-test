<script setup lang="ts">
import AppHeader from "./components/layout/AppHeader.vue"
import MainBanner from "./components/promo/MainBanner.vue"
import CatalogSection from "./components/catalog/CatalogSection.vue"
import FeaturesSection from "./components/features/FeaturesSection.vue"
import FeedbackSection from "./components/feedback/FeedbackSection.vue"
import ClientsSection from "./components/clients/ClientsSection.vue"
import TelegramSection from "./components/cta/TelegramSection.vue"
import AppFooter from "./components/layout/AppFooter.vue"
import ProductsSection from "./components/products/ProductsSection.vue"

import { nextTick, onMounted } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"

onMounted(async () => {
  await nextTick()

  AOS.init({
    duration: 800,
    once: true
  })

  AOS.refresh()
})
</script>

<template>
  <AppHeader />

  <MainBanner />

  <section data-aos="fade-up" data-aos-delay="100">
    <CatalogSection />
  </section>

  <section data-aos="fade-right" data-aos-delay="100">
    <ProductsSection />
  </section>

  <section data-aos="fade-left">
    <FeaturesSection />
  </section>

  <section data-aos="zoom-in">
    <FeedbackSection />
  </section>

  <section data-aos="fade-up">
    <ClientsSection />
  </section>

  <section data-aos="zoom-in-up">
    <TelegramSection />
  </section>

  <AppFooter />
</template>

<style scoped></style>
