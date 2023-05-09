module.exports = {
    // theme: '@vuepress/blog',
    themeConfig: {
        repo: 'https://github.com/marujiao',
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
            { text: "git", link: "/git/玩转git.md" },
            { text: "android", link: "/android/" },
            { text: "面试问题", link: "/interview/" }
        ],
        // 侧边栏
        sidebar: 'auto',
        // plugins: [
        //     ['@vuepress/back-to-top'], // 返回顶部
        //     ['@vuepress/nprogress'], // 加载进度条
        //   ]
        // 禁用默认的搜索框
        search: false,
        // 调整默认搜索框显示的搜索结果数量
        searchMaxSuggestions: 10,
        plugins: [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true,
            },
        ],
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: false,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: false
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