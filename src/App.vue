<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { computed } from 'vue'
import AppButton from '@/components/AppButton.vue'
import AppNavigation from '@/components/AppNavigation.vue'

const { isAuthenticated, logout, isLoading, loginWithRedirect } = useAuth0()

const isAppLoading = computed(() => isLoading.value)

const handleClickLogin = () => {
  loginWithRedirect({
    appState: {
      target: '/profile',
    },
  })
}
</script>

<template>
  <h1 v-if="isAppLoading">Loading app...</h1>
  <div v-else>
    <header>
      <AppNavigation>
        <template #title>
          <RouterLink to="/" style="text-decoration: none; color: var(--text)"
            >Vue3 + Auth0
          </RouterLink>
        </template>
        <template #buttons>
          <template v-if="isAuthenticated">
            <AppButton outline @click="logout()">Logout</AppButton>
            <RouterLink to="/profile">
              <AppButton>Profile</AppButton>
            </RouterLink>
          </template>
          <template v-else>
            <AppButton @click="handleClickLogin()">Log in</AppButton>
          </template>
        </template>
      </AppNavigation>
    </header>

    <RouterView v-slot="{Component}">
      <Transition name="slide-down" mode="out-in">
        <Component :is="Component"/>
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}

.nav-actions {
  display: flex;
  gap: 0.5rem;
}
</style>
