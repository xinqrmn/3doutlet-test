<script setup lang="ts">
import { Star, MessageCircle, ShoppingCart, Dot } from "lucide-vue-next"
import { ref } from "vue"

const inCart = ref(false)

const toggleCart = () => (inCart.value = !inCart.value)
</script>

<template>
  <div class="product-item">
    <div class="flex items-center justify-between">
      <h4 class="text-[#808080] text-lg">3D принтер</h4>

      <div class="flex items-center gap-4 text-lg">
        <p class="flex items-center gap-2">
          <Star :size="16" />
          4.6
        </p>
        <p class="flex items-center gap-2">
          <MessageCircle :size="16" />
          1890
        </p>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <h2 class="title font-black text-4xl">Bambu Lab A1 mini (EU)</h2>
      <span class="badge badge-info badge-lg uppercase">хит</span>
    </div>

    <p class="text-[#808080] text-lg">3D принтер</p>

    <img
      class="m-auto my-6"
      src="../../assets/images/product-printer.png"
      alt="Printer image"
    />

    <div class="flex items-center justify-between mb-4">
      <div class="flex flex-col">
        <p>тип печати:</p>
        <span class="font-normal text-2xl">FDM</span>
      </div>
      <div class="flex flex-col items-end">
        <p>поле печати:</p>
        <span class="font-normal text-2xl">256x256x256</span>
      </div>
    </div>

    <button
      class="product-btn"
      :class="{ 'product-btn--active': inCart }"
      @click="toggleCart"
    >
      <ShoppingCart v-if="!inCart" />

      <span v-if="!inCart">в корзину</span>
      <span v-else>в корзине</span>

      <Dot />

      <span v-if="!inCart">134 000 руб.</span>
      <span v-else>- 1шт +</span>
    </button>
  </div>
</template>

<style scoped>
.product-item {
  background: #fff;
  border-radius: 2.4rem;
  padding: 2rem;
  display: grid;
  grid-template-rows: repeat(6, max-content);
  transition: all 0.3s ease;
}

.product-item:hover {
  cursor: pointer;
}

.product-btn {
  font-family: "DIN Pro Condensed", sans-serif;
  background: #fd4f00;
  color: #fff;
  gap: 0.8rem;
  text-transform: uppercase;
  padding: 1.4rem 0;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.product-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.product-btn--active {
  background-color: transparent;
  border: 1px solid #000;
  color: #000;
}
</style>
