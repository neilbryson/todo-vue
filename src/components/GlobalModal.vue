<script setup lang="ts">
const props = defineProps({
  isOpen: Boolean,
  title: String,
});
</script>

<template v-if="props.isOpen">
  <Teleport to="#modal-base">
    <div class="modal-container" v-if="props.isOpen">
      <div class="modal-content">
        <div v-if="props.title" class="modal-title">{{ props.title }}</div>
        <slot name="content"></slot>
        <div class="modal-actions">
          <slot name="action"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
  .modal-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    position: relative;
    padding: 1.5rem;
    background-color: var(--color-background-soft);
    border-radius: 0.5rem;
  }
</style>
