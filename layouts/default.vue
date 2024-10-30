<script setup>
const { t } = useI18n()

const links = [
  {
    icon: 'i-ph-planet',
    label: t('nav.worlds'),
    to: '/worlds',
  },
  {
    icon: 'i-ph-user-focus',
    label: t('nav.personas'),
    to: '/personas',
  },
  {
    icon: 'i-ph-circuitry',
    label: t('nav.models'),
    to: '/models',
  },
  {
    icon: 'i-ph-head-circuit',
    label: t('nav.assistants'),
    to: '/assistants',
  },
  {
    icon: 'i-ph-panorama',
    label: t('nav.scenarios'),
    to: '/scenarios',
  },
]

const productions = [
  {
    children: [
      {
        icon: 'i-ph-chats',
        label: 'Production 1',
        to: '/productions/1',
      },
    ],
    label: t('nav.productions'),
  },
]
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel>
      <UDashboardNavbar :title="t('app.name')" />
      <UDashboardSidebar>
        <UDashboardSidebarLinks :links="links" />
        <UButton block icon="i-ph-chats-fill" to="/">{{ t('nav.newProduction') }}</UButton>
        <UDashboardSidebarLinks :links="productions" />
        <template #footer>
          <UColorModeSelect class="w-full" />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>
    <slot />
  </UDashboardLayout>
</template>