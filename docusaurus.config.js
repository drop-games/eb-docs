const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Hyperblade Docs",
    tagline: "Duel to Earn",
    url: "https://docs.playhyperblade.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/logo.ico",
    organizationName: "Hyperblade DAO", // Usually your GitHub org/user name.
    projectName: "hb-dao", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            remarkPlugins: [math],
            rehypePlugins: [katex],
            // Please change this to your repo.
            editUrl: "https://github.com/dropdao/hb-docs",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],
    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
        integrity:
          "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
        crossorigin: "anonymous",
      },
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Hyperblade",
          logo: {
            alt: "Hyperblade logo",
            src: "img/logobig.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Whitepaper",
            },
            {
              href: "https://github.com/dropdao/hb-docs",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Whitepaper",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "DAO links",
              items: [
                {
                  label: "Discord",
                  href: "https://playhyperblade.com",
                },
                {
                  label: "Reddit",
                  href: "https://playhyperblade.com",
                },
                {
                  label: "GitHub",
                  href: "https://playhyperblade.com",
                },
                {
                  label: "Snapshot",
                  href: "https://playhyperblade.com",
                },
              ],
            },
            {
              title: "Social",
              items: [
                {
                  label: "Youtube",
                  href: "https://playhyperblade.com",
                },
                {
                  label: "Twitter",
                  href: "https://playhyperblade.com",
                },
                {
                  label: "Facebook",
                  href: "https://playhyperblade.com",
                },
                {
                  label: "Instagram",
                  href: "https://playhyperblade.com",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Hyperblade DAO`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
