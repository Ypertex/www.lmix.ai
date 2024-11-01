<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-black'
  }
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
