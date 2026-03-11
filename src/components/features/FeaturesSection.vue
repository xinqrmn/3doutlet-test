<script setup lang="ts">
import BaseContainer from "../ui/BaseContainer.vue";
import FeaturesItem from "./FeaturesItem.vue";
</script>

<template>
  <section class="features">
    <BaseContainer>
      <h2 class="title text-7xl sm:text-5xl w-full font-black uppercase flex items-center gap-3 mb-10 w-[90rem]">Почему нас выбирают и рекомендуют
        уже более 5000 покупателей?
      </h2>

      <div class="features-inner">
        <FeaturesItem />
        <FeaturesItem />
        <FeaturesItem />
        <FeaturesItem />
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.features {
  margin-bottom: 5rem;
}

.features-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .features-inner {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
@media (max-width: 1024px) {
  .features-inner {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>