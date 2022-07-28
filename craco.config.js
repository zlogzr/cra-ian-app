// 使用 alias 插件
const aliasPlugin = require('craco-alias')

module.exports = {
  plugins: [
    // 支持别名
    {
      plugin: aliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.extend.json'
      }
    }
  ]
}
