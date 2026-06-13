import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Oscar Studio',
  tagline: '教学工具 / 益智游戏 / AI',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  trailingSlash: false,

  url: 'https://docs.oscarstudio.cn',
  baseUrl: '/',

  organizationName: 'Oscar-Studio',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Oscar Studio',
      logo: {
        alt: 'Oscar Studio',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
        height: 32,
      },
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://oscarstudio.cn',
          label: '主站',
          position: 'right',
        },
        {
          href: 'https://github.com/oscarstudio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '产品',
          items: [
            {label: '教学工具', to: '/teaching-tools/'},
            {label: '益智游戏', to: '/games/'},
            {label: 'AI', to: '/ai/'},
          ],
        },
        {
          title: '站点',
          items: [
            {label: 'Oscar Studio', href: 'https://oscarstudio.cn'},
            {label: '教学工具', href: 'https://tools.oscarstudio.cn'},
            {label: '益智游戏', href: 'https://games.oscarstudio.cn'},
            {label: 'AI Studio', href: 'https://ai.oscarstudio.cn'},
          ],
        },
        {
          title: '更多',
          items: [
            {label: '博客', href: 'https://blog.oscarstudio.cn'},
            {label: 'API', href: 'https://api.oscarstudio.cn'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oscar Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'tsx'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
