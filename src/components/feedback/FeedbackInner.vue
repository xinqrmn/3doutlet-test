<script setup lang="ts">
import { Send } from "lucide-vue-next"
import FeedbackComment from "./FeedbackComment.vue"

const comments = [
  {
    id: "123",
    avatar: "A",
    name: "Антонина Иванова",
    createdAt: "2 часа назад",
    text: "Всё супер, только один нюанс — упаковка могла бы быть поплотнее."
  },
  {
    id: "123",
    avatar: "A",
    name: "Антонина Иванова",
    createdAt: "2 часа назад",
    text: "Всё супер, только один нюанс — упаковка могла бы быть поплотнее."
  },
  {
    id: "123",
    avatar: "A",
    name: "Антонина Иванова",
    createdAt: "2 часа назад",
    text: "Всё супер, только один нюанс — упаковка могла бы быть поплотнее."
  },
  {
    id: "123",
    avatar: "A",
    name: "Антонина Иванова",
    createdAt: "2 часа назад",
    text: "Всё супер, только один нюанс — упаковка могла бы быть поплотнее."
  }
]
</script>

<template>
  <div class="feedback-inner">
    <div class="feedback-form">
      <div class="">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Оставить комментарий</h2>

        <div class="space-y-5">
          <input
            type="text"
            placeholder="Ваше имя *"
            class="input input-bordered input-lg w-full focus:none"
            required
          />

          <input
            type="email"
            placeholder="Email (необязательно)"
            class="input input-bordered input-lg w-full focus:none"
          />

          <textarea
            class="textarea textarea-bordered textarea-lg w-full h-[16rem]"
            placeholder="Ваш отзыв..."
            required
          ></textarea>

          <button class="btn">
            <Send :size="16" />
            Отправить
          </button>
        </div>
      </div>
    </div>

    <div class="feedback-comments">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
        Комментарии ({{ comments.length }})
      </h2>

      <div class="space-y-5">
        <FeedbackComment v-for="comment in comments" :key="comment.id" v-bind="comment" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.feedback-inner {
  background: #fff;
  padding: 3rem;
  border-radius: 2.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.input,
.textarea {
  padding: 0.8rem;
  border-radius: 1rem;
  outline: none;
}

.btn {
  background: #fd4f00;
  color: #fff;
  width: 100%;
  padding: 2.5rem;
  border: none;
  text-transform: uppercase;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

textarea {
  resize: none;
}
.btn:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .feedback-inner {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
</style>
