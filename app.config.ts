export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'neutral',

    icons: {
      dark: 'i-ph-moon',
      light: 'i-ph-sun',
      system: 'i-ph-devices',
      search: 'i-ph-magnifying-glass',
      external: 'i-ph-arrow-square-out',
      chevron: 'i-ph-caret-down',
      hash: 'i-ph-hash',
      menu: 'i-ph-list',
      close: 'i-ph-x',
      check: 'i-ph-check'
    },

    dashboard: {
      panel: {
        border: 'border-gray-50',
      },
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
