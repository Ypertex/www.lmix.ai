<script setup>
const { t } = useI18n()
const colorModeToggle = ref(null)

const items = [
  [
    {
      label: t('user.menu.logout'),
      icon: 'i-ph-sign-out',
      to: '/logout',
    },
  ],
]
</script>

<template>
  <div class="flex items-center gap-1.5">
    <UColorModeButton class="rounded-full" />
    <UDropdown :items="items">
      <UAvatar icon="i-ph-user" />
    </UDropdown>
  </div>
</template>