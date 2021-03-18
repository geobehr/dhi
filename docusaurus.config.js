module.exports = {
  title: "Digital Home Initiative",
  tagline: "Docs & Tutorials for the DHI",
  url: 'https://geobehr.github.io/dhi',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.png',
  organizationName: 'geobehr', // Usually your GitHub org/user name.
  projectName: 'dhi', // Usually your repo name.
  themeConfig: {
    navbar: {
      "title": "DHI",
      logo: {
        alt: 'Restoring Personal Privacy & Competition',
        "src": ""
      },
      items: [
        {
          label: 'About DHI',
          position: 'left',
          items: [
            {
              to: 'docs/dhi/tutorial',
              activeBasePath: 'docs',
              label: 'DHI Tutorial',
              position: 'left',
            },
            {
              to: 'docs/dhi/day-in-life',
              activeBasePath: 'docs',
              label: 'DHI Day-in-the-life',
              position: 'left',
            },
          ]
        },
        {
          label: 'Getting Started',
          position: 'left',
          items: [
            {
              to: 'docs/dhi/getting-started',
              activeBasePath: 'docs',
              label: 'DHI Getting Started',
              position: 'left',
            },
          ]
        },
        {
          to: '/',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'docs/api/api-list',
          activeBasePath: 'api',
          label: 'API',
          position: 'right'
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right'
        },
        {
          to: "search",
          label: 'Search',
          position: "right"
        },
        {
          href: 'https://github.com/geobehr/dhi',
          label: 'DHI on GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Day-in-the-Life',
              to: 'docs/dhi/day-in-life',
            },
            {
              label: 'FAQ',
              to: 'docs/dhi/dhi-faq',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'DHI Style Guide',
              to: 'docs/style-guide',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} apistolic.com`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/geobehr/dhi/blob/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/geobehr/dhi/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        hashed: true,
        languages: ['en'],
      }
    ],
  ],
};
