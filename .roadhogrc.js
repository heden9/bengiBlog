const path = require('path');

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/assets/svg/'),
  require.resolve('antd').replace(/index\.js$/, '')
];

export default {
  entry: 'src/index.js',
  // svgSpriteLoaderDirs: svgSpriteDirs,
  disableCSSModules: true,
  // 接口代理示例
  proxy: {
    "/api": {
      "target": "http://localhost:3000",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
  },
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        [
          "import", {
          "libraryName": "antd",
          "style": true
        }
        ]
      ]
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        [
          "import", {
          "libraryName": "antd",
          "style": true
        }
        ]
      ]
    }
  }
}
