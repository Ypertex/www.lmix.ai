<script setup>
const { t } = useI18n()

const links = [
  {
    children: [
      {
        icon: 'i-ph-planet',
        label: t('nav.worlds'),
        to: '/worlds',
      },
      {
        icon: 'i-ph-mask-happy',
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
    ],
    label: t('nav.stage'),
  }
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
    <UDashboardPanel collapsible>
      <UDashboardNavbar :title="t('app.name')">
        <template #toggle>
          <UDashboardNavbarToggle icon="i-ph-x" />
        </template>
        <template #right>
          <UserMenu />
        </template>
      </UDashboardNavbar>
      <UDashboardSidebar>
        <UDashboardSidebarLinks :links="links" />
        <UButton block icon="i-ph-chats-fill" to="/">{{ t('nav.newProduction') }}</UButton>
        <UDashboardSidebarLinks :links="productions" />
      </UDashboardSidebar>
    </UDashboardPanel>
    <slot />
  </UDashboardLayout>
</template>