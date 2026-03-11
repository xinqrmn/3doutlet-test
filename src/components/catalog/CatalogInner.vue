<script setup lang="ts">
import CatalogCard from "./CatalogCard.vue";

const cards = [
  {
    key: '123',
    imageSrc: '/src/assets/images/catalog/catalog-printer.jpg',
    imageAlt: 'printer image',
    title: '3D принтеры',
    subtitle: 'Мощные инструмент для изготовления 3D-моделей',
  },
  {
    key: '123',
    imageSrc: '/src/assets/images/catalog/catalog-filament.jpg',
    imageAlt: 'filament image',
    title: 'фИЛАМЕНТЫ',
    subtitle: 'Высококачественные материалы для 3D-печати',
  },
  {
    key: '123',
    imageSrc: '/src/assets/images/catalog/catalog-accessories.jpg',
    imageAlt: 'accessories image',
    title: 'Аксессуары',
    subtitle: 'Обновите свой принтер с помощью современнных деталей',
  },
  {
    key: '123',
    imageSrc: '/src/assets/images/catalog/catalog-sale.jpg',
    imageAlt: 'sale image',
    title: 'акции',
    subtitle: 'Уникальные акции и скидки',
  }
]
</script>

<template>
  <div class="catalog-inner">
    <CatalogCard
        v-for="card in cards"
        :image-alt="card.imageAlt"
        :image-src="card.imageSrc"
        :subtitle="card.subtitle"
        :title="card.title"
        :key="card.key"
    ></CatalogCard>
  </div>
</template>

<style scoped>
.catalog-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1.5rem;
  margin-bottom: 2.5rem;
}

@media (max-width: 768px) {
  .catalog-inner {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
@media (max-width: 430px) {
  .catalog-inner {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>