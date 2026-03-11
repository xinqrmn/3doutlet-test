<script setup lang="ts">
import {MessageCircle} from "lucide-vue-next";


interface IFeedbackComment {
  avatar: string
  name: string
  createdAt: string
  text: string
  id: string
}
const props = defineProps<IFeedbackComment>()
</script>

<template>
  <div class="comment-card card bg-base-100  hover:shadow-md transition-all duration-300 ">
    <div class="card-body p-6">
      <div class="flex items-start gap-4">
        <div class="avatar placeholder">
          <div class="bg-primary text-primary-content rounded-full w-14 h-14 flex items-center justify-center text-2xl font-medium shadow-sm">
            {{ avatar }}
          </div>
        </div>

        <div class="flex-1">
          <div class="flex items-center justify-between mb-1">
            <h3 class="font-medium text-lg">{{ name }}</h3>
            <span class="text-sm text-[#808080] flex items-center gap-1.5">
              <MessageCircle :size="14" />
              {{ createdAt }}
            </span>
          </div>

          <p class="text-base leading-relaxed mt-2 opacity-90 whitespace-pre-line">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>