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
  <h2 v-if="todoList.length === 0">Click "New todo" to add a new one</h2>

  <section v-if="undoneList.length > 0" class="todo-list-container todo-list">
    <h2>Todo</h2>
    <TodoItem v-for="item in undoneList" :key="item.id" :todo-info="item" />
  </section>

  <section v-if="doneList.length > 0" class="todo-list-container done-list">
    <h2>Done</h2>
    <TodoItem v-for="item in doneList" :key="item.id" :todo-info="item" />
  </section>
</template>

<style lang="scss" scoped>
.todo-list-container {
  > h2 {
    margin: 0.85rem 0;
  }
}
</style>
