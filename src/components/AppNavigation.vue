<script setup lang="ts">

</script>

<template>
  <nav class="app-navigation">
    <div class="app-navigation__title">
      <slot name="title"/>
    </div>
    <div class="app-navigation__buttons">
      <slot name="buttons"/>
    </div>
  </nav>
</template>

<style scoped>
.app-navigation {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--secondary);
}


.app-navigation__title {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}
.app-navigation__buttons {
  display: flex;
  gap: 0.5rem;
}


</style>
