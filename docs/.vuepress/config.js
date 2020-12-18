module.exports = {
  title: "祈风的个人博客", //标题
  keywords: "前端开发",
  description: "前端开发 祈风的个人博客",
  repo: "https://github.com/renchuanmin/king.git", //仓库地址
  base: "/king/", // 配合部署项目
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: "Last Updated",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Project", link: "/project/" },
      { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/renchuanmin/king.git" }
    ],
    sidebar: {
      '/project/': penSidebarConfig('Project'),
      '/guide/': genSidebarConfig('Guide'),
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  },

  markdown: {
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'css',
        'JavaScript',
        'canvas',
      ]
    },
  ]
}
function penSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'aa',
        'bb',
        'dd',
      ]
    },
  ]
}

