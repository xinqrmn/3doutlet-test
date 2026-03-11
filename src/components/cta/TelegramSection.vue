<script setup lang="ts">

import BaseContainer from "../ui/BaseContainer.vue";
</script>

<template>
  <section class="cta-telegram">
    <BaseContainer>
      <div class="telegram-inner">
        <div class="z-22 flex items-center gap-[3.5rem] flex-wrap">
          <div class="text-white">
            <h4 class="title text-5xl uppercase font-black">Подпишитесь на наш канал в Telegram</h4>
            <p class="font-normal">Полезные советы и новости по 3D печати</p>
          </div>
          <a class="telegram-btn">Подписаться на канал</a>
        </div>

        <img class="telegram-decor" src="../../assets/images/telegram-decor.png" alt="Telegram decor">
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.telegram-inner {
  background: #191B30;
  border-radius: 2.4rem;
  padding: 2.2rem 3rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.telegram-decor {
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  transition: transform .4s ease;
}

.telegram-inner:hover .telegram-decor {
  transform: scale(1.02);
}

.telegram-btn {
  font-weight: 400;
  background: #2AABEE;
  color: #fff;
  padding: 1.4rem;
  font-size: 1.4rem;
  border: none;
  text-transform: uppercase;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20;
}

.telegram-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .telegram-decor {
    display: none;
  }
}
</style>