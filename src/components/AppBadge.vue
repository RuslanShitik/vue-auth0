<script setup lang="ts">

</script>

<template>
  <span class="app-badge">
    <slot/>
  </span>
</template>

<style scoped>
.app-badge {
  background-color: var(--primary);
  border-radius: var(--border-radius);
  color: var(--background);
  font-size: .8em;
  padding: .2em .5em;
}
</style>
