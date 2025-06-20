import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Open Authentication Certification Initiative',
  description: 'Open Authentication Certification Initiative',
  base: '/',

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Badges', link: '/badges' },
      { text: 'Vendors', link: '/vendors' },
      { text: 'Docs', link: '/external/' },
      { text: 'GitHub', link: 'https://github.com/openauthcert' }
    ],

    sidebar: {
      '/external/': [
        {
          text: 'Governance',
          items: [
            { text: 'Foundation', link: '/external/governance/foundation' },
            { text: 'Contributor Council', link: '/external/governance/contributor-council' },
            { text: 'Decision Process', link: '/external/governance/decision-process' }
          ]
        },
        {
          text: 'Certification',
          items: [
            { text: 'Badge Lifecycle', link: '/external/certification/badge-lifecycle' },
            { text: 'Criteria v0.1', link: '/external/certification/criteria-v0.1' },
            { text: 'Application Process', link: '/external/certification/application-process' },
            { text: 'Revocation Policy', link: '/external/certification/revocation-policy' }
          ]
        },
        {
          text: 'Policies',
          items: [
            { text: 'Code of Conduct', link: '/external/policies/code-of-conduct' },
            { text: 'Data Usage', link: '/external/policies/data-usage' },
            { text: 'Legal Notice', link: '/external/policies/legal-notice' }
          ]
        },
        {
          text: 'General',
          items: [
            { text: 'FAQ', link: '/external/faq' }
          ]
        }
      ],
      '/': [
        {
          text: 'Certification',
          items: [
            { text: 'Badges', link: '/badges' },
            { text: 'Certified Vendors', link: '/vendors' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openauthcert' }
    ]
  }
})
