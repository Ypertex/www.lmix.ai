export default defineAppConfig({
  ui: {
    primary: 'turquoise',
    gray: 'neutral',

    dashboard: {
      sidebar: {
        links: {
          trailingIcon: {
            base: 'h-4 w-4',
            name: 'i-ph-caret-up',
            inactive: 'rotate-180'
          },
        },
      },
    },
    page: {
      hero: {
        title: 'font-serif font-normal',
      },
    },
    select: {
      default: {
        selectedIcon: 'i-ph-check',
        trailingIcon: 'i-ph-caret-down',
      },
    },
    selectMenu: {
      default: {
        selectedIcon: 'i-ph-check',
      },
    },
  },
})
