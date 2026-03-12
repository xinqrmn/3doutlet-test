<script setup lang="ts"></script>

<template>
  <div class="main-banner">
    <div class="max-w-218">
      <h2 class="title uppercase">
        1 кг пластика в подарок! <span class="text-[#FD4F00] font-normal">*</span>
      </h2>
      <p class="subtitle">Бесплатная доставка при покупке от 25 000 рублей</p>
      <button class="banner-btn text-white bg-[#FD4F00]">Купить сейчас</button>
    </div>
    <p class="required">
      <span class="text-[#FD4F00] text-4xl">*</span> При покупке принтера Bambu Lab
    </p>
  </div>
</template>

<style scoped>
.main-banner {
  border-radius: 2.4rem;
  padding: 5rem;
  background: url("../../assets/images/main-banner.jpg") center/cover no-repeat;
}

.title {
  font-family: "DIN Pro Condensed", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  line-height: 7.2rem;
  margin-bottom: 2rem;
}

.subtitle {
  font-family: "DIN Pro Condensed", sans-serif;
  font-weight: 200;
  font-size: 5rem;
  line-height: 4.4rem;
  width: 95%;
  margin-bottom: 3rem;
}

.banner-btn {
  font-family: "DIN Pro Condensed", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.8rem;
  padding: 1.4rem 2.2rem;
  border-radius: 1rem;
  margin-bottom: 7rem;
  cursor: pointer;
}

.required {
  font-weight: 400;
}

@media (max-width: 430px) {
  .title {
    font-size: 4rem;
    line-height: 100%;
  }
  .subtitle {
    font-size: 4rem;
    line-height: 4.4rem;
  }
}
</style>
