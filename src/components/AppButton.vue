<script setup lang="ts">
defineProps<{
  outline?: boolean
}>()
</script>

<template>
  <button class="app-button" :class="{'--outline': outline}">
    <slot/>
  </button>
</template>

<style scoped>

.app-button {
  background-color: var(--primary);
  color: var(--background);
  border: 2px solid var(--primary);
  padding: .5rem 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: var(--font-size-sm);
}

.--outline {
  background-color: transparent;
  color: var(--primary);
}
</style>
