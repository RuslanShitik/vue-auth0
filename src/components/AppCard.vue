<script setup lang="ts">

</script>

<template>
  <div class="app-card">
    <slot/>
  </div>
</template>

<style scoped>
.app-card {
  background-color: var(--secondary);
  border-radius: var(--border-radius);
  padding: 1rem;
}
</style>
