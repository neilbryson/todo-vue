import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Todo } from '@/types/Todo';

export const useTodoStore = defineStore('todo', () => {
  const todoList = ref<Todo[]>([{ id: 0, isDone: false, details: 'hello', dateAdded: Date.now() }]);
  const lastId = ref(0);

  function add(details: string): void {
    const currentDate = Date.now();
    const id = lastId.value++;

    todoList.value.push({
      id,
      dateAdded: currentDate,
      details,
      isDone: false,
    });
  }

  function toggleDone(id: number): boolean | undefined {
    const item = todoList.value[id];

    if (!item) return void 0;

    const nextDone = !item.isDone;
    item.isDone = nextDone;

    return nextDone;
  }

  return { add, todoList, toggleDone };
});
