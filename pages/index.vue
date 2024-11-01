<script setup>
const { t } = useI18n()
</script>

<template>
  <UDashboardPanel grow>
    <UDashboardNavbar :title="t('nav.newProduction')">
    </UDashboardNavbar>
    <UDashboardPanelContent>
      <UContainer class="w-full">
        <UPageHero icon="i-ph-hand-waving-duotone" title="Hey!" />
      </UContainer>
    </UDashboardPanelContent>
  </UDashboardPanel>
</template>