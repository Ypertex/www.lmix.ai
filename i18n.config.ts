export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      app: {
        name: 'LMiX',
      },
      nav: {
        stage: 'Stage',
        worlds: 'Worlds',
        personas: 'Personas',
        models: 'Models',
        assistants: 'Assistants',
        scenarios: 'Scenarios',
        productions: 'Productions',
        newProduction: 'New Production'
      },
      user: {
        menu: {
          colorMode: 'Dark Mode',
          logout: 'Logout',
        },
      },
    },
  },
})) 