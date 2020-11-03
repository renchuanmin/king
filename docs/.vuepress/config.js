module.exports = {
  title: "祈风的个人博客", //标题
  keywords: "前端开发",
  description: "前端开发 祈风的个人博客",
  repo: "https://github.com/renchuanmin/king.git", //仓库地址
  base: "/king/", // 配合部署项目
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: "Last Updated",
  themeConfig: {
    //主题配置
    // logo: '/img/logo.png',
    nav: [
      // 导航栏配置
      {
        text: "Home",
        link: "/", // '/'默认为docs文件夹下的README.md文件
      },
      {
        text: "Blog",
        link: "/blog/",
      },
      {
        text: "Space",
        link: "/space/",
      },
      {
        text: "GitHub",
        link: "https://github.com/renchuanmin/king.git",
      },
    ],
    sidebar: {
      //侧边拦
      "/blog/": [
        {
          title: "前端daily", //sidebar 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            "/blog/javaScript/one", //文章地址
            "/blog/javaScript/two",
          ],
        },
        {
          title: "框架相关",
          collapsable: true,
          children: ["/blog/framework/vuepressBlog"],
        },
        {
          title: "工具收藏",
          collapsable: true,
          children: ["/blog/tools/one", "/blog/tools/two"],
        },
      ],
      "/space/": [
        {
          title: "诗和远方",
          collapsable: true,
          children: ["/space/poetryAndDistance/one"],
        },
        {
          title: "谝闲传",
          collapsable: true,
          children: ["/space/talk/one"],
        },
      ],
    },
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
