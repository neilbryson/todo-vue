<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';

const props = defineProps({
  id: Number,
  details: String,
  isDone: Boolean,
})
const { toggleDone } = useTodoStore();
</script>

<template>
  <div class="todo-item-container" :class="{ checked: props.isDone }">
    <input type="checkbox" :checked="props.isDone" @change="toggleDone(props.id)" />
    <span class="todo-item-details">{{ props.details }}</span>
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
      text-decoration: line-through;
    }

    .todo-item-details {
      margin-left: 1rem;
      font-size: 1.25rem;
    }
  }

</style>
