<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Pagination } from "swiper/modules"
import BaseContainer from "../ui/BaseContainer.vue"

import "swiper/css"
import "swiper/css/pagination"
import MainBannerItem from "./MainBannerItem.vue"
</script>

<template>
  <section class="main-banner">
    <BaseContainer>
      <div class="slider">
        <Swiper
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false
          }"
          :loop="true"
          :modules="[Autoplay, Pagination]"
          :pagination="{
            el: '.slider-pagination',
            clickable: true
          }"
          :prevent-clicks="false"
          :prevent-clicks-propagation="false"
          :slides-per-view="1"
          :touch-start-prevent-default="false"
        >
          <SwiperSlide>
            <MainBannerItem />
          </SwiperSlide>
          <SwiperSlide>
            <MainBannerItem />
          </SwiperSlide>
          <SwiperSlide>
            <MainBannerItem />
          </SwiperSlide>
        </Swiper>

        <div class="slider-controls">
          <div class="slider-pagination"></div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.main-banner {
  margin-bottom: 5rem;
}

.slider {
  position: relative;
}

.slider-controls {
  position: absolute;
  right: 40px;
  bottom: 30px;
  display: flex;
  gap: 8px;
  z-index: 10;
}

.slider :deep(.swiper-pagination-bullet) {
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: #ddd;
  opacity: 1;
  position: relative;
  overflow: hidden;
  pointer-events: auto;
}

.slider :deep(.swiper-slide) {
  pointer-events: auto;
}

.slider :deep(.swiper-pagination-bullet-active) {
  background: #ddd;
}

.slider :deep(.swiper-pagination-bullet-active::after) {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #ff4d00;

  animation: progress 5s linear forwards;
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
