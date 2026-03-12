<script setup lang="ts"></script>

<template>
  <a class="clients-item" href="#">
    <slot></slot>
  </a>
</template>

<style scoped>
.clients-item {
  background: #fff;
  border-radius: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.clients-item:hover {
  transform: translateY(-0.6rem);
}
</style>
