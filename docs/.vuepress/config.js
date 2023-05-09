module.exports = {
    themeConfig: {
        repo: 'https://github.com/marujiao/blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        // 导航栏
        nav: [
            { text: "主页", link: "/" },
            { text: "node", link: "/node/node" },
            {
                text: "前端",
                items: [
                    { text: "html", link: "/web/html/" },
                    { text: "css", link: "/web/css/" },
                ]
            },
            { text: "数据库", link: "/database/" },
            { text: "android", link: "/android/" },
            { text: "面试问题", link: "/interview/" }
        ],
        // 侧边栏
        sidebar: [
            ['/', '首页'],
            ['/node/node.md', '我的第一篇博客']
          ],
        // plugins: [
        //     ['@vuepress/back-to-top'], // 返回顶部
        //     ['@vuepress/nprogress'], // 加载进度条
        //   ]
        plugins: [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true,
            },
        ],
    },
    title: 'miruna的博客',
    description: '专注前端技术栈分享',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        //增加manifest.json
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    base: '/blog/',
}