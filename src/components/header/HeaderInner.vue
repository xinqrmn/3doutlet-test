<script setup lang="ts"> import {
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  Dot,
  Earth,
  EarthLock,
  Heart,
  Navigation,
  Phone,
  Search,
  ShoppingCart,
  User
} from "lucide-vue-next";
</script>

<template>
  <div class=" py-10 flex items-center justify-between">
    <div class="flex items-center gap-6"><a class="flex items-center gap-2 hover:scale-105 duration-200" href="#">
      <Navigation :size="14"/>
      ул. Большая красноперская</a> <a class="flex items-center gap-2 hover:scale-105 duration-200" href="#">
      <ArrowUpRight :size="14"/>
      Юр. лицам</a></div>
    <ul class="flex items-center gap-6">
      <li class="dropdown dropdown-hover contact">
        <div tabindex="0" role="button" class="menu-btn flex items-center gap-2 cursor-pointer bg-gray ">
          <Phone :size="18"/>
          <span class="flex items-center gap-2 cursor-pointer"> Связь с нами <ChevronDown class="chevron"/> </span>
        </div>
        <ul tabindex="-1"
            class="dropdown-content menu bg-white rounded-xl w-86 p-3 shadow-lg border border-gray-100 left-0">
          <li><a class="menu-item">
            <Earth/>
            +7(000)000 00-00</a></li>
          <li><a class="menu-item">
            <EarthLock/>
            +7(846)000 00-00</a></li>
        </ul>
      </li>
      <li class="auth flex items-center gap-6">
        <button class="flex items-center gap-2 cursor-pointer">
          <User :size="18"/>
          Войти
        </button>
        <Dot/>
        <button class=" cursor-pointer">Регистрация</button>
      </li>
    </ul>
  </div>
  <div class="" v-if="mobile">
    <!-- <Navigation :size="14"/> Адрес <Phone :size="18"/> Контакты <User :size="18"/> Войти --> </div>
  <nav class="flex items-center justify-between">
    <div class="flex items-center gap-12"><a href="#"> <img src="../../assets/logo.svg" alt="3DOutlet logo"> </a>
      <ul class="nav-items flex items-center gap-10 uppercase font-medium">
        <li class="dropdown dropdown-hover">
          <div tabindex="0" role="button" class=" menu-btn flex gap-2 cursor-pointer"> каталог
            <ChevronDown class="chevron"/>
          </div>
          <ul tabindex="-1" class="dropdown-content menu bg-white rounded-xl w-56 p-3 shadow-lg border border-gray-100">
            <li><a class="menu-item">Принтеры</a></li>
            <li><a class="menu-item">филаменты</a></li>
            <li><a class="menu-item">Аксессуары</a></li>
            <li><a class="menu-item">акции</a></li>
          </ul>
        </li>
        <li class="dropdown dropdown-hover">
          <div tabindex="0" role="button" class=" menu-btn flex gap-2 cursor-pointer"> программное обеспеченние
            <ChevronDown class="chevron"/>
          </div>
          <ul tabindex="-2" class="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
            <li><a class="menu-item">Web сайт</a></li>
            <li><a class="menu-item">Оффициальное ПО</a></li>
          </ul>
        </li>
        <li><a class="feedback flex items-start gap-1 " href="#"> Отзывы
          <ArrowUpRight class="arrow-up-right" :size="15"/>
        </a></li>
      </ul>
    </div>
    <ul class="flex items-center gap-6">
      <li class=" cursor-pointer">
        <Search/>
      </li>
      <li class=" cursor-pointer">
        <Heart/>
      </li>
      <li class=" cursor-pointer">
        <ChartNoAxesColumnIncreasing/>
      </li>
      <li class="flex items-center gap-3 cursor-pointer">
        <ShoppingCart/>
        <div class="flex flex-col text-sm"><p class="flex items-center">268 000 ₽</p> <span
            class="text-[#808080]">2 шт.</span></div>
      </li>
    </ul>
  </nav>
  <div class="drawer drawer-end" v-if="mobile"><input id="my-drawer-5" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content"> <!-- Page content here --> <label for="my-drawer-5"
                                                                   class="drawer-button btn btn-primary">Open
      drawer</label></div>
    <div class="drawer-side"><label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4"> <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped> .nav-items {
  font-family: 'DIN Pro Condensed', sans-serif;
}

.menu-btn:hover .chevron {
  transform: rotate(180deg);
}

.chevron {
  transition: transform 0.35s ease;
  will-change: transform;
  transform-origin: center;
}

.feedback:hover .arrow-up-right {
  transform: translateX(.3rem) translateY(-.3rem);
}

.arrow-up-right {
  transition: transform 0.15s linear;
  will-change: transform;
  transform-origin: center;
}

.menu-item {
  border-radius: 8px;
  padding: 10px;
  transition: all .2s;
  font-size: 1.4rem;
}

.menu-item:hover {
  background: #f5f5f5;
  transform: translateX(4px);
}

.auth, .contact {
  padding: 1rem;
  background-color: #E7EBF3;
  border-radius: 1rem;
}
</style>