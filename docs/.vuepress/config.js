module.exports = {
    title: 'miruna的博客',
    description: '专注前端技术栈分享',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        //增加manifest.json
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        nav: [{ text: "主页", link: "/" },
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
        sidebar: {
            '/node/': [
                ['', 'node目录'],
                ['path', '作为前端也需要知道的路径知识'],
                ['stream', 'node核心模块-stream'],
            ],
            '/web/': [
                ['', '前端'],
                {
                    title: 'css',
                    name: 'css',
                    collabsable: false,
                    children: [
                        ['css/', '目录'],
                        ['css/1', 'css常考面试题'],
                    ],
                },
            ],
        },
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
    base: '/blog/',
}