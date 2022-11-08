<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from '@/components/TopHeader.vue';
</script>

<template>
  <main>
    <div>
      <Header />
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 100vw;
    height: 100vh;
  }

  div {
    max-width: 1440px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
</style>
