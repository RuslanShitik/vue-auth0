<script setup lang="ts">
</script>

<template>
  <main class="app-page">
    <div  class="app-page__title" v-if="$slots['title']">
      <h1>
        <slot name="title" />
      </h1>
    </div>


    <slot />
  </main>
</template>

<style scoped>
.app-page {
  padding: 1rem;
}

.app-page__title {
  border-bottom: 1px solid var(--secondary);
}
</style>
