<script setup lang="ts">
import BaseContainer from "../ui/BaseContainer.vue";
import HeaderInner from "../header/HeaderInner.vue";

</script>

<template>
  <header class="header">
    <BaseContainer>
      <HeaderInner />
    </BaseContainer>
  </header>
</template>

<style scoped>
.header {
  padding-bottom: 2rem;
  background: #fff;
  background: linear-gradient(0deg,rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 15%);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 111;
}


</style>