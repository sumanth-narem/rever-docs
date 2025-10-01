import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Rever',
  tagline: 'Open Source Finance Automation Tool',
  favicon: 'img/favicon.ico.svg',
  // Set the production url of your site here
  url: 'https://reverfin.ai/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Reverfin', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  //Broken links
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          include: ["**/*.md", "**/*.mdx"],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/Rever.avif',
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: "keywords",
        content: "open source, finance automation, document extraction, reconciliation, three way matching, 3 way matching, accounts payable, ap automation",
      }
    ],
    navbar: {
      title: '',
      logo: {
        alt: 'ReverFin Logo',
        src: 'img/ReverLogo.avif',
        href: 'https://reverfin.ai/',
      },
      items: [
        {
          type: "search",
          position: "left",
        },
        {
          href: "https://github.com/makerever/rever",
          "aria-label": "GitHub",
          position: "right",
          className: "navbar--github-link",
        },
        {
          href: "https://app.reverfin.ai/",
          label: "Sign in",
          position: "right",
        },
      ],
    },
    footer: {},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
