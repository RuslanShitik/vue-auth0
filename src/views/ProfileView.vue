<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import AppPage from '@/components/AppPage.vue'
import AppCard from '@/components/AppCard.vue'
import AppAvatar from '@/components/AppAvatar.vue'
import AppBadge from '@/components/AppBadge.vue'

const { user } = useAuth0()
</script>

<template>
  <AppPage v-if="user">
    <template v-if="!user.email_verified">
      <h3>Your email is not verified!</h3>
      <p>Check {{ user.email }} to verify email address</p>
    </template>

    <AppCard class="user-card">
      <AppAvatar :src="user.picture" :size="75"/>
      <div class="user-card__content">
        <span class="user-card__nickname">{{user.nickname}}</span>
        <span>
          {{user.email}} <AppBadge v-if="user.email_verified">Verified</AppBadge>
        </span>
      </div>
    </AppCard>

  </AppPage>
</template>

<style scoped>
.user-card {
  max-width: 500px;
  margin: auto;

  display: flex;
  gap: 1rem
}

.user-card__nickname {
  font-weight: bold;
  font-size: 1.5rem;
}

.user-card__content {
  display: flex;
  flex-direction: column;
  gap: .5rem
}
</style>
