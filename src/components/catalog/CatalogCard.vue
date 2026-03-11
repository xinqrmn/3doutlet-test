<script setup lang="ts">
import {ArrowUpRight} from "lucide-vue-next";

interface ICatalogCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

const props = defineProps<ICatalogCard>()
</script>

<template>
<div class="catalog-card">
  <img class="catalog-image" :src="props.imageSrc" :alt="props.imageAlt">
  <div class="catalog-text">
    <h3>{{props.title}}</h3>
    <p>{{props.subtitle}}</p>
  </div>
  <a class="catalog-action">
    <ArrowUpRight :size="18" />
  </a>
</div>
</template>

<style scoped>
.catalog-card {
  background: #fff;
  padding: 2rem;
  position: relative;
  border-radius: 2.5rem;
  height: 100%;
  max-height: 24rem;
  display: grid;
  grid-template-rows: max-content 1fr;
  transition: transform .25s ease, box-shadow .25s ease;
}

.catalog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
}

.catalog-card:hover .catalog-action {
  transform: scale(1.15);
}

.catalog-text {
  align-self: end;

  h3 {
    text-transform: uppercase;
    font-family: 'DIN Pro Condensed', sans-serif;
    font-weight: 900;
    font-size: 2rem;
  }

  p {
    color: #4B4B4B;
    font-size: 1.4rem;
    line-height: 1.7rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    min-height: 3.4rem;
  }
}

.catalog-action {
  position: absolute;
  content: '';
  padding: .7rem;
  background: #f8f8f8;
  color: #FD4F00;
  border-radius: 50%;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}


</style>