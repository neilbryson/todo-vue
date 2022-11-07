<script lang="ts">
import { mapActions, mapState, mapStores } from 'pinia';
import { useTodoStore } from '@/stores/todo';
import TodoItem from '@/components/TodoItem.vue';

export default {
  components: { TodoItem },
  computed: {
    ...mapStores(useTodoStore),
    ...mapState(useTodoStore, ['todoList']),
  },
  methods: {
    ...mapActions(useTodoStore, ['add', 'toggleDone'])
  },
}
</script>

<template>
  <div>
    <TodoItem v-for="item in todoList" :key="item.id" :details="item.details" :is-done="item.isDone" :id="item.id" />
  </div>
</template>

<style lang="scss" scoped>

</style>
