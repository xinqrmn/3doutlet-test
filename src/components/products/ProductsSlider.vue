<script setup lang="ts">
import ProductsCard from "./ProductsCard.vue";
import {ChevronLeft, ChevronRight} from "lucide-vue-next";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
</script>

<template>
  <div class="relative w-full">
    <Swiper
        :modules="[Navigation]"
        :slides-per-view="4"
        :space-between="20"
        :loop="true"
        :breakpoints="{
          0: { slidesPerView: 1 },
          520: {slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }"
        :navigation="{
          nextEl: '.next-slide',
          prevEl: '.prev-slide',
        }"
    >
      <SwiperSlide>
        <ProductsCard/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductsCard/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductsCard/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductsCard/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductsCard/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductsCard/>
      </SwiperSlide>
    </Swiper>

    <div class="slider-pagination absolute right-0 -top-26 flex items-center gap-2">
      <button class="prev-slide p-2 rounded-full z-10">
        <ChevronLeft/>
      </button>
      <button class="next-slide p-2 rounded-full z-10">
        <ChevronRight/>
      </button>
    </div>
  </div>
</template>

<style scoped>

.next-slide,
.prev-slide {
  border: 1px solid #000;
  cursor: pointer
}
</style>