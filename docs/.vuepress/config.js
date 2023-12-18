const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "jazz-blog",
  description: 'vdoing博客主题模板',
  base: '/jazz-blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "8ec4651bab9553f80c33",
        clientSecret: "ec9c9a8fe5623cc499afdd48130e3b0a8d384979",
        owner: "jazz",
        repo: "jazz-blog",
      },
    ],
  ],

  head,
  plugins,
  themeConfig,
}
