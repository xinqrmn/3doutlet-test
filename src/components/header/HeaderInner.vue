<script setup lang="ts">
import {
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  Dot,
  Earth,
  EarthLock,
  Heart,
  Menu,
  Navigation,
  Phone,
  Search,
  ShoppingCart,
  User
} from "lucide-vue-next"
</script>

<template>
  <div class="drawer drawer-end">
    <input id="mobile-menu" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <div class="hidden lg:flex py-6 items-center justify-between">
        <div class="flex items-center gap-6">
          <a class="flex items-center gap-2 hover:scale-105 duration-200" href="#">
            <Navigation :size="14" />
            ул. Большая красноперская
          </a>

          <a class="flex items-center gap-2 hover:scale-105 duration-200" href="#">
            <ArrowUpRight :size="14" />
            Юр. лицам
          </a>
        </div>

        <ul class="flex items-center gap-6">
          <li class="dropdown dropdown-hover contact">
            <div
              tabindex="0"
              role="button"
              class="menu-btn flex items-center gap-2 cursor-pointer bg-gray"
            >
              <Phone :size="18" />
              <span class="flex items-center gap-2 cursor-pointer">
                Связь с нами <ChevronDown class="chevron" />
              </span>
            </div>
            <ul
              tabindex="-1"
              class="dropdown-content menu bg-white rounded-xl w-86 p-3 shadow-lg border border-gray-100 left-0"
            >
              <li>
                <a class="menu-item">
                  <Earth />
                  +7(000)000 00-00</a
                >
              </li>
              <li>
                <a class="menu-item">
                  <EarthLock />
                  +7(846)000 00-00</a
                >
              </li>
            </ul>
          </li>

          <li class="auth flex items-center gap-4">
            <button class="flex items-center gap-2 cursor-pointer">
              <User :size="18" />
              Войти
            </button>
            <Dot />
            <button class="cursor-pointer">Регистрация</button>
          </li>
        </ul>
      </div>

      <nav class="flex items-center justify-between py-4">
        <label for="mobile-menu" class="cursor-pointer lg:hidden">
          <Menu />
        </label>

        <div class="flex items-center gap-12">
          <a href="#">
            <img src="../../assets/logo.svg" alt="3DOutlet logo" />
          </a>

          <ul class="nav-items flex items-center gap-10 uppercase font-medium">
            <li class="dropdown dropdown-hover">
              <div tabindex="0" role="button" class="menu-btn flex gap-2 cursor-pointer">
                каталог
                <ChevronDown class="chevron" />
              </div>

              <ul
                tabindex="-1"
                class="dropdown-content menu bg-white rounded-xl w-56 p-3 shadow-lg border border-gray-100"
              >
                <li><a class="menu-item">Принтеры</a></li>
                <li><a class="menu-item">филаменты</a></li>
                <li><a class="menu-item">Аксессуары</a></li>
                <li><a class="menu-item">акции</a></li>
              </ul>
            </li>
            <li class="dropdown dropdown-hover">
              <div tabindex="0" role="button" class="menu-btn flex gap-2 cursor-pointer">
                программное обеспеченние
                <ChevronDown class="chevron" />
              </div>
              <ul
                tabindex="-2"
                class="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
              >
                <li><a class="menu-item">Web сайт</a></li>
                <li><a class="menu-item">Оффициальное ПО</a></li>
              </ul>
            </li>
            <li>
              <a class="feedback flex items-start gap-1" href="#">
                Отзывы
                <ArrowUpRight class="arrow-up-right" :size="15" />
              </a>
            </li>
          </ul>
        </div>

        <!-- ICONS -->
        <ul class="flex items-center gap-6">
          <li class="cursor-pointer">
            <Search />
          </li>

          <li class="cursor-pointer hidden md:block">
            <Heart />
          </li>

          <li class="cursor-pointer hidden md:block">
            <ChartNoAxesColumnIncreasing />
          </li>

          <li class="flex items-center gap-2 cursor-pointer">
            <ShoppingCart />

            <div class="hidden md:flex flex-col text-sm">
              <p>268 000 ₽</p>
              <span class="text-[#808080]">2 шт.</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>

    <div class="drawer-side">
      <label for="mobile-menu" class="drawer-overlay"></label>

      <ul class="menu bg-white w-4/5 min-h-full p-6 text-base-content">
        <li class="menu-title">Каталог</li>

        <li class="burger-item"><a>Принтеры</a></li>
        <li class="burger-item"><a>Филаменты</a></li>
        <li class="burger-item"><a>Аксессуары</a></li>
        <li class="burger-item"><a>Акции</a></li>

        <div class="divider"></div>

        <li class="menu-title">Аккаунт</li>

        <li class="burger-item">
          <a class="flex gap-3">
            <User :size="18" />
            Войти
          </a>
        </li>

        <li class="burger-item">
          <a class="flex gap-3">
            <Heart :size="18" />
            Избранное
          </a>
        </li>

        <li class="burger-item">
          <a class="flex gap-3">
            <ChartNoAxesColumnIncreasing :size="18" />
            Сравнение
          </a>
        </li>

        <div class="divider"></div>

        <li class="burger-item">
          <a class="flex gap-3">
            <Phone :size="18" />
            Контакты
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.nav-items {
  font-family: "DIN Pro Condensed", sans-serif;
}

.menu-btn:hover .chevron {
  transform: rotate(180deg);
}

.chevron {
  transition: transform 0.3s;
}

.feedback:hover .arrow-up-right {
  transform: translate(0.3rem, -0.3rem);
}

.arrow-up-right {
  transition: transform 0.15s;
}

.menu-item {
  border-radius: 8px;
  padding: 10px;
  font-size: 1.4rem;
  transition: all 0.2s;
}

.menu-title {
  font-family: "DIN Pro Condensed", sans-serif;
  color: #000;
  font-weight: 900;
  font-size: 3rem;
}

.burger-item {
  font-size: 1.4rem;
  font-weight: 400;
}

.burger-item:not(.burger-item:last-child) {
  margin-bottom: 1rem;
}

.menu-item:hover {
  background: #f5f5f5;
  transform: translateX(4px);
}

.auth,
.contact {
  padding: 10px;
  background: #e7ebf3;
  border-radius: 10px;
}
</style>
