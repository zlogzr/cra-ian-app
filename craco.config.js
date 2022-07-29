// 使用 alias 插件
const aliasPlugin = require('craco-alias')
// 使用less插件
const lessPlugin = require('craco-less')

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
    },
    {
      plugin: lessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 修改Antd主题色
            modifyVars: { '@primary-color': '#4578F8' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
