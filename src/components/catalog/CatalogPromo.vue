<script setup lang="ts">
import CatalogPromoItem from "./CatalogPromoItem.vue";
import {Check} from "lucide-vue-next";
import {ArrowUpRight} from "lucide-vue-next";

</script>

<template>
  <div class="promo-inner">
    <CatalogPromoItem>
      <div class="promo-content">
        <div class="mb-4">
          <h3 class="promo-title">Работаем с юр. лицами</h3>
          <ul class="flex flex-wrap gap-3 w-4/5">
            <li class="text-white text-s flex items-center gap-3 font-normal">
              <Check class="text-[#01B0CF]" :size="20"/>
              Отгрузка товара в день оплаты
            </li>
            <li class="text-white text-s flex items-center gap-3 font-normal">
              <Check class="text-[#01B0CF]" :size="20"/>
              Возврат НДС 20%
            </li>
            <li class="text-white text-s flex items-center gap-3 font-normal">
              <Check class="text-[#01B0CF]" :size="20"/>
              Набор закрывающих документов
            </li>
            <li class="text-white text-s flex items-center gap-3 font-normal">
              <Check class="text-[#01B0CF]" :size="20"/>
              Лизинг
            </li>
            <li class="text-white text-s flex items-center gap-3 font-normal">
              <Check class="text-[#01B0CF]" :size="20"/>
              Онлайн формирование счета
            </li>
          </ul>
        </div>
        <button class="promo-btn">Узнать больше
          <ArrowUpRight/>
        </button>
      </div>
      <img class="absolute bottom-10 right-10 z-10" src="../../assets/images/promo/promo-sale.png" alt="Sale image">
      <img class="absolute bottom-0 right-0" src="../../assets/images/promo/promo-blur.png" alt="Sale image">
    </CatalogPromoItem>
    <CatalogPromoItem>
      <div class="promo-content">
        <div>
          <h3 class="promo-title">не знате, какое оборудование вам подойдет?</h3>
          <p class="w-[30rem] font-normal mb-10">
            Ответьте на несколько вопросов и получите подборку подходящих моделей с советами эксперта
          </p>
        </div>
        <button class="promo-btn">Узнать больше
          <ArrowUpRight/>
        </button>
      </div>
      <img class="absolute bottom-0 right-0 z-1" src="../../assets/images/promo/promo-printer.png" alt="Printer photo">
    </CatalogPromoItem>
  </div>
</template>

<style scoped>
.promo-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.7rem;
}

.promo-inner > * {
  transition: transform .3s ease, box-shadow .3s ease;
}

.promo-inner > *:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, .12);
}

.promo-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 20;
}

.promo-title {
  width: 38rem;
  font-family: "DIN Pro Condensed", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.promo-btn {
  width: 26rem;
  background-color: #FD4F00;
  padding: 1.4rem 0;
  font-family: 'DIN Pro Condensed', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.3rem;
  cursor: pointer;

  transition: transform .2s ease, box-shadow .2s ease;
}

.promo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(253, 79, 0, .35);
}

@media (max-width: 768px) {
  .promo-inner {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .promo-title {
    width: 100%;
  }

}
</style>