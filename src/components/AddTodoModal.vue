<script setup lang="ts">
import { ref } from 'vue';
import GlobalModal from '@/components/GlobalModal.vue';
import { useTodoStore } from '@/stores/todo';

const { add } = useTodoStore();

const isOpen = ref(false);
const todoContent = ref('');

function handleContentChange(e: Event): void {
  if (e.target instanceof HTMLTextAreaElement) {
    todoContent.value = e.target.value;
  }
}

function handleAdd(): void {
  add(todoContent.value);
  isOpen.value = false;
  todoContent.value = '';
}

function handleClose(): void {
  isOpen.value = false;
  todoContent.value = '';
}
</script>

<template>
  <button @click="isOpen = true">+ New todo</button>
  <GlobalModal :is-open="isOpen" title="Add new todo">
    <template #content>
      <textarea @change="handleContentChange" />
    </template>
    <template #action>
      <button @click="handleClose">Close</button>
      <button :disabled="!todoContent" @click="handleAdd">Add</button>
    </template>
  </GlobalModal>
</template>

<style lang="scss" scoped>
button {
  margin-left: auto;
}

textarea {
  resize: none;
  font-family: inherit;
}
</style>
