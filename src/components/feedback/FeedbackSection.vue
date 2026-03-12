<script setup lang="ts">
import BaseContainer from "../ui/BaseContainer.vue"
import FeedbackInner from "./FeedbackInner.vue"
import { ArrowUpRight } from "lucide-vue-next"
</script>

<template>
  <section class="feedback">
    <BaseContainer>
      <h2
        class="title text-7xl sm:text-5xl w-full font-black uppercase flex items-center gap-3 mb-10"
      >
        Отзывы
        <ArrowUpRight :size="48" />
      </h2>

      <FeedbackInner />
    </BaseContainer>
  </section>
</template>

<style scoped>
.feedback {
  margin-bottom: 5rem;
}
</style>
