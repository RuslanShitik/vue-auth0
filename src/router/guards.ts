import type { NavigationGuardWithThis } from 'vue-router'
import { createAuthGuard } from '@auth0/auth0-vue'

export const isAuthorizedGuard: NavigationGuardWithThis<undefined> = createAuthGuard()

