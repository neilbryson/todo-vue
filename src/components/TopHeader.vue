<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AddTodoModal from '@/components/AddTodoModal.vue';
</script>

<template>
  <header>
    <h1>Todo app</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <AddTodoModal />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 3rem;
}

nav {
  margin-left: 2rem;
  font-size: 1.25rem;
}
</style>
