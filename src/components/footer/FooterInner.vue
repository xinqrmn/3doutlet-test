<script setup lang="ts">

</script>

<template>
  <div class="w-full flex justify-between text-[1.6rem] flex-wrap">
    <div class="lg: mb-6">
      <h3 class="title uppercase mb-10 text-4xl font-black">ооо “центр хк” 3d outlet</h3>

      <ul class="flex flex-col justify-between gap-[1.8rem] mb-12">
        <li class="footer-requires__item">
          <a href="#">Политика обработки персональных данных</a>
        </li>
        <li class="footer-requires__item">
          <a href="#">Пользовательское соглашение</a>
        </li>
        <li class="footer-requires__item">
          <a href="#">Публичная оферта</a>
        </li>
        <li class="footer-requires__item">
          <a href="#">Карта сайта</a>
        </li>
      </ul>

      <ul class="flex gap-[1.5rem]">
        <li>
          <a class="footer-socials__item" href="#">
            <img src="../../assets/images/logos/telegram-dark.svg" alt="telegram logo">
          </a>
        </li>
        <li>
          <a class="footer-socials__item" href="#">
            <img src="../../assets/images/logos/vk-dark.svg" alt="vk logo">
          </a>
        </li>
        <li>
          <a class="footer-socials__item" href="#">
            <img src="../../assets/images/logos/youtube-dark.svg" alt="youtube logo">
          </a>
        </li>
      </ul>
    </div>

    <div class="lg: mb-6">
      <h3 class="title uppercase mb-10 text-4xl font-black">Каталог</h3>
      <ul class="flex flex-col justify-between gap-[1.5rem]">
        <li class="footer-list__item">
          <a href="#">3D Принтеры</a>
        </li>
        <li class="footer-list__item">
          <a href="#">Филаменты</a>
        </li>
        <li class="footer-list__item">
          <a href="#">Аксессуары</a>
        </li>
        <li class="footer-list__item">
          <a href="#">Акции</a>
        </li>
        <li class="footer-list__item">
          <a href="#">Избранное</a>
        </li>
      </ul>
    </div>

    <div class="lg: mb-6">
      <h3 class="title uppercase mb-10 text-4xl font-black">контакты</h3>

      <div class="flex items-center gap-4 mb-6">
        <a class="title uppercase text-4xl font-black" href="tel:+74951476599">+7 (495) 147-65-99</a>
        <a href="#"><img src="../../assets/images/logos/telegram-light.svg" alt="telegram logo"></a>
        <a href="#"><img src="../../assets/images/logos/whatsapp-light.svg" alt="whatsapp logo"></a>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <a href="#"><img src="../../assets/images/logos/mail-light.svg" alt="mail logo"></a>
        <a class="title uppercase text-4xl font-black" href="mailto:info@3d-outlet.ru">info@3d-outlet.ru</a>
      </div>

      <p class="text-[#808080] font-normal text">Бесплатный звонок по России</p>
    </div>
  </div>
</template>

<style scoped>

.footer-list__item {
  text-decoration: underline;
  transition: all .2s ease;
}

.footer-requires__item {
  color: #808080;
  font-weight: 400;
  transition: all .2s ease;
}

.footer-socials__item {
  width: 3.2rem;
  height: 3.2rem;
  padding: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  border-radius: 1rem;
  background: #fff;
  transition: all .2s ease;
}

.footer-socials__item:hover {
  transform: scale(1.1);
}

.footer-list__item:hover,
.footer-requires__item:hover {
  transform: translateY(-.3rem);
  text-decoration: none;
}


</style>