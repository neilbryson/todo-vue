<script lang="ts">
import { mapActions } from 'pinia';
import { useTodoStore } from '@/stores/todo';

export default {
  props: {
    id: Number,
    details: String,
    isDone: Boolean,
  },
  methods: {
    ...mapActions(useTodoStore, ['toggleDone'])
  }
}
</script>

<template>
  <div class="todo-item-container" :class="{ checked: isDone }">
    <input type="checkbox" :checked="isDone" @change="toggleDone(id)" />
    <span>{{ details }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .todo-item-container {
    display: flex;
    border: 1px solid #d3d3d3;
    border-radius: 0.25rem;
    padding: 0.875rem;

    &.checked {
      opacity: 0.4;
    }
  }
</style>
