<script setup lang="ts">
import dayjs from 'dayjs';
import { useTodoStore } from '@/stores/todo';
import type { Todo } from '@/types/Todo';

const props = defineProps<{ todoInfo: Todo }>();
const { toggleDone } = useTodoStore();
</script>

<template>
  <div class="todo-item-container" :class="{ checked: props.todoInfo.isDone }">
    <input type="checkbox" :checked="props.todoInfo.isDone" @change="toggleDone(props.todoInfo.id)" />
    <div class="todo-item-details">
      <span>{{ props.todoInfo.details }}</span>
      <span v-if="props.todoInfo.dateDone">
        {{ dayjs(props.todoInfo.dateDone).format('D MMMM YYYY H:mm:ss') }}
      </span>
    </div>
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

      .todo-item-details > span:first-of-type {
        text-decoration: line-through;
      }
    }

    .todo-item-details {
      margin-left: 1rem;

      > span:first-of-type {
        font-size: 1.25rem;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }
</style>
