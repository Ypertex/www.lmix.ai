<script setup>
const { t } = useI18n()
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel>
      <UDashboardNavbar :title="t('app.name')" />
    </UDashboardPanel>
    <slot />
  </UDashboardLayout>
</template>