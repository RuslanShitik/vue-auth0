<script setup lang="ts">
const { size = 50, src } = defineProps<{
  src?: string
  size?: number
}>()
</script>

<template>
  <img class="app-avatar" :src="src" alt="Avatar" :width="size" :height="size" />
</template>

<style scoped>
.app-avatar {
  border-radius: 9999px;
}
</style>
