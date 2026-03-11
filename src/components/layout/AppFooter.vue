<script setup lang="ts">
import BaseContainer from "../ui/BaseContainer.vue";
import FooterInner from "../footer/FooterInner.vue";
</script>

<template>
  <footer class="footer">
    <BaseContainer>
      <FooterInner/>
    </BaseContainer>
  </footer>
</template>

<style scoped>
.footer {
  background: #000;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
  color: #fff;
  padding: 6rem 0;
}
</style>