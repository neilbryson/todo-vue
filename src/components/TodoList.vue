<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import TodoItem from '@/components/TodoItem.vue';
import { useTodoStore } from '@/stores/todo';

const { todoList } = storeToRefs(useTodoStore());

const undoneList = computed(() => todoList.value.filter((todo) => !todo.isDone));
const doneList = computed(() => todoList.value.filter((todo) => todo.isDone));
</script>

<template>
  <section v-if="undoneList.length > 0" class="todo-list-container todo-list">
    <h2>Todo</h2>
    <TodoItem v-for="item in undoneList" :key="item.id" :details="item.details" :is-done="item.isDone" :id="item.id" />
  </section>

  <section v-if="doneList.length > 0" class="todo-list-container done-list">
    <h2>Done</h2>
    <TodoItem v-for="item in doneList" :key="item.id" :details="item.details" :is-done="item.isDone" :id="item.id" />
  </section>
</template>

<style lang="scss" scoped>
  .todo-list-container {
    > h2 {
      margin: 0.85rem 0;
    }
  }
</style>
