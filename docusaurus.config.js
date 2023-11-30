// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import fs from "fs";

const unreleasedTauriVersion = 'v1'
var lastestReleasedVersion

// Checks if Docusaurus has been versioned before and sets versions accordingly
try {
  lastestReleasedVersion = JSON.parse(
      fs.readFileSync('versions.json', 'utf-8')
  )[0]
} catch {
  console.error()
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Utility Docs',
  tagline: 'At this stage, UNC token issuance takes place, the public chain foundation is established, and the community and public chain are in the development phase. During this stage, the first internal test will be initiated, focusing on incentive model testing based on the Binance Smart Chain.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Utility',
        logo: {
          alt: 'Utility Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Basic',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'nodeSidebar',
            label: 'Node',
          },
          {
            type: 'docSidebar',
            sidebarId: 'powerSidebar',
            position: 'left',
            label: 'Power',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dappSidebar',
            position: 'left',
            label: 'Dapp',
          },
          {
            to: '/blog', label: 'Community', position: 'left'
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            className: 'navbarIcon versionIcon',
            dropdownItemsAfter: [
              {
                href: 'https://beta.tauri.app/',
                label: 'v2',
                target: '_self',
              },
            ],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'White Paper',
                to: '/docs/dapp/start',
              },
              {
                label: 'Green Paper',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'Use Utility',
            items: [
              {
                label: 'Utility Wallet',
                to: '/docs/dapp/start',
              },
              {
                label: 'Blockchain Explorer',
                to: '/docs/dapp/start',
              },
              {
                label: 'Faucet',
                to: '/docs/dapp/start',
              },
              {
                label: 'Ecosystem dApps',
                to: '/docs/dapp/start',
              },
              {
                label: 'Mining Management Tool',
                to: '/docs/dapp/start',
              },
              {
                label: 'GetPower',
                to: '/docs/dapp/start',
              },
              {
                label: 'AI Model',
                to: '/docs/dapp/start',
              },
            ],
          },
          {
            title: 'Learning',
            items: [
              {
                label: 'Learning Center',
                to: '/docs/dapp/start',
              },
              {
                label: 'What is Utility',
                to: '/docs/dapp/start',
              },
              {
                label: 'What is UNC Token',
                to: '/docs/dapp/start',
              },
              {
                label: 'What is POCI Consensus',
                to: '/docs/dapp/start',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Developer Hub',
                to: '/docs/dapp/start',
              },
              {
                label: 'Discord',
                to: '/docs/dapp/start',
              },
              {
                label: 'Github',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'Forum',
                to: '/docs/dapp/start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Hub',
                to: '/blog',
              },
              {
                label: 'Online Community',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Utility Foundation',
                to: '/blog',
              },
              {
                label: 'Activity',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'YOUR_APP_ID',
      //
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //
      //   indexName: 'YOUR_INDEX_NAME',
      //
      //   // Optional: see doc section below
      //   contextualSearch: true,
      //
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'external\\.com|domain\\.com',
      //
      //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //   replaceSearchResultPathname: {
      //     from: '/docs/', // or as RegExp: /\/docs\//
      //     to: '/',
      //   },
      //
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
      //
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
      //
      //   //... other Algolia params
      // },
    }),

};

export default config;
