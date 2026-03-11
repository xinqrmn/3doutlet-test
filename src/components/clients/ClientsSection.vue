<script setup lang="ts">

import BaseContainer from "../ui/BaseContainer.vue";
import ClientsItem from "./ClientsItem.vue";
</script>

<template>
  <section class="clients">
    <BaseContainer>
      <h2 class="title text-7xl sm:text-5xl w-full font-black uppercase flex items-center gap-3 mb-10 w-[90rem]">Нам доверяют</h2>

      <div class="clients-inner">
        <ClientsItem><img src="../../assets/images/cleints/client-skolkovo.svg" alt="skolkovo logo"></ClientsItem>
        <ClientsItem><img src="../../assets/images/cleints/client-yandex.svg" alt="yandex logo"></ClientsItem>
        <ClientsItem><img src="../../assets/images/cleints/client-ozon.svg" alt="ozon logo"></ClientsItem>
        <ClientsItem><img src="../../assets/images/cleints/client-vse-instrumenti.svg" alt="vse-instrumenti logo"></ClientsItem>
        <ClientsItem><img src="../../assets/images/cleints/client-efko.svg" alt="efko logo"></ClientsItem>
        <ClientsItem><img src="../../assets/images/cleints/client-avtovaz.svg" alt="avtovaz logo"></ClientsItem>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.clients {
  margin-bottom: 5rem;
}

.clients-inner {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2rem;
}

@media (max-width: 1024px) {
  .clients-inner {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
@media (max-width: 430px) {
  .clients-inner {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
</style>