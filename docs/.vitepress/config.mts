import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Open Authentication Certification Initiative',
  description: 'Open Authentication Certification Initiative',
  base: '/',

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Open Authentication Certification Initiative',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Badges', link: '/badges' },
      { text: 'Vendors', link: '/vendors' },
      { text: 'GitHub', link: 'https://github.com/openauthcert' }
    ],

    sidebar: [
      {
        text: 'Certification',
        items: [
          { text: 'Badges', link: '/badges' },
          { text: 'Certified Vendors', link: '/vendors' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openauthcert' }
    ]
  }
});
