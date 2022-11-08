import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Todo } from '@/types/Todo';

export const useTodoStore = defineStore('todo', () => {
  const todoList = ref<Todo[]>([]);
  const lastId = ref(0);

  function add(details: string): void {
    const currentDate = Date.now();
    const id = lastId.value++;

    todoList.value.push({
      id,
      dateAdded: currentDate,
      dateDone: null,
      details,
      isDone: false,
    });
  }

  function toggleDone(id: number): boolean | undefined {
    const item = todoList.value[id];

    if (!item) return void 0;

    const nextDone = !item.isDone;
    item.isDone = nextDone;
    item.dateDone = nextDone ? Date.now() : null;

    return nextDone;
  }

  return { add, todoList, toggleDone };
});
