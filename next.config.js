module.exports = {
  async rewrites() {
    //GET routes from cms
    return [
      {
        source: '/blogi/:slug',
        destination: '/blog/:slug',
      },
    ]
  },
  i18n: {
    locales: ['en', 'et'],
    defaultLocale: 'et',
  },
}
