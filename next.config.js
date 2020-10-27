module.exports = {
  async rewrites() {
    //GET routes from cms
    return [
      {
        source: '/blogiiii/:slug',
        destination: '/blog/:slug',
      },
    ]
  },
  i18n: {
    locales: ['en', 'et'],
    defaultLocale: 'et',
  },
}
